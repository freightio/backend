package biz

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"reflect"

	//"sinaclouds/fx/common/log"
	//"sinaclouds/fx/core/config"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

const (
	dburl = "root:123456@tcp(mysql:3306)/freight"
)

var DB *sql.DB

func init() {
	// if config.DBURL == "" { //maybe service don't need DB
	// 	log.Warn("Ignore DB init")
	// 	return
	// }
	var err error
	for i := 1; i <= 5; i++ {
		DB, err = sql.Open("mysql", dburl)
		if err != nil {
			log.Fatalf("Connect %s failed: %s; on...: %v", dburl, err, i)
			//alarm.Notify("nevis_mongodb_ping", 5, "/", err.Error())
			time.Sleep(time.Second * 5)
			continue
		} else {
			break
		}
	}
	log.Println("DB init successfully: ", dburl)
	//[workaround]http://rdpm.intra.sina.com.cn/sinaclouds/forum/issues/55
	DB.SetMaxIdleConns(0)
}

func checkTable(table string) error {
	sql := "CREATE TABLE IF NOT EXISTS " + table + " (data JSON)"
	if _, err := DB.Exec(sql); err != nil {
		return err
	}
	return nil
}

func ToJSON(obj interface{}) (string, error) {
	jsonStr, err := json.Marshal(obj)
	if err != nil {
		return "", err
	}
	replacer := strings.NewReplacer("\\n", "\\\\n", "\\r", "\\\\r", "\"", "\\\"", "'", "\\'")
	return replacer.Replace(string(jsonStr)), nil
}

func Insert(table string, obj interface{}) error {
	tx, err := DB.Begin()
	if err != nil {
		return err
	}
	if err := InsertTx(tx, table, obj); err != nil {
		tx.Rollback()
		return err
	}
	if err := tx.Commit(); err != nil {
		tx.Rollback()
		return err
	}
	return nil
}

func InsertTx(tx *sql.Tx, table string, obj interface{}) error {
	checkTable(table)
	strValue, err := ToJSON(obj)
	if err != nil {
		return err
	}
	_, err = tx.Exec("INSERT INTO " + table + " VALUES ('" + strValue + "')")
	return err
}

func InsertIfNotExist(table, id string, obj interface{}) error {
	var o interface{}
	if GetById(table, id, &o) == sql.ErrNoRows {
		return Insert(table, obj)
	}
	return nil
}

//Update||Insert
func Upsert(table, id string, obj interface{}) error {
	var o interface{}
	err := GetById(table, id, &o)
	if err == sql.ErrNoRows {
		return Insert(table, obj)
	}
	return Update(table, id, obj)
}

func GetById(table string, id string, obj interface{}) error {
	return Get(table, map[string]interface{}{"$.id": id}, obj)
}

//https://dev.mysql.com/doc/refman/5.7/en/json.html#json-paths
func Get(table string, kvs map[string]interface{}, obj interface{}) error {
	checkTable(table)
	union := ""
	for k, value := range kvs { //key should be [json-path], e.g:$.id
		switch v := value.(type) {
		case string:
			union = union + "AND data->'" + k + "'='" + v + "' "
		case int, int32, int64, uint, uint32, uint64:
			union = union + "AND data->'" + k + "'=" + fmt.Sprint(v) + " "
		default:
			return fmt.Errorf("unknown type: %+v", v)
		}
	}
	query := "SELECT * FROM " + table + " WHERE " + strings.TrimPrefix(union, "AND")
	jsonStr := ""
	if err := DB.QueryRow(query).Scan(&jsonStr); err == nil {
		if err := json.Unmarshal([]byte(jsonStr), &obj); err != nil {
			return err
		}
	} else {
		return err
	}
	return nil
}

func List(table string, result interface{}, clause ...string) error {
	checkTable(table)
	resultv := reflect.ValueOf(result)
	if resultv.Kind() != reflect.Ptr || resultv.Elem().Kind() != reflect.Slice {
		panic("result argument must be a slice address")
	}
	slicev := resultv.Elem()
	elemt := slicev.Type().Elem()
	query := "SELECT data FROM " + table

	if len(clause) > 0 {
		for _, v := range clause {
			query = query + " " + v
		}
	}
	log.Println(query)
	rows, err := DB.Query(query)
	if err != nil {
		return err
	}
	defer rows.Close()
	i := 0
	for rows.Next() {
		jsonStr := ""
		err := rows.Scan(&jsonStr)
		if err != nil {
			return err
		}
		elemp := reflect.New(elemt)
		json.Unmarshal([]byte(jsonStr), elemp.Interface())
		slicev = reflect.Append(slicev, elemp.Elem())
		i++
	}
	resultv.Elem().Set(slicev.Slice(0, i))
	return nil
}

func Update(table, id string, newObj interface{}) error {
	tx, err := DB.Begin()
	if err != nil {
		return err
	}

	if err := UpdateTx(tx, table, id, newObj); err != nil {
		tx.Rollback()
		return err
	}

	if err := tx.Commit(); err != nil {
		tx.Rollback()
		return err
	}
	return nil
}

func UpdateTx(tx *sql.Tx, table, id string, newObj interface{}) error {
	if err := DeleteTx(tx, table, id); err != nil {
		return err
	}
	if err := InsertTx(tx, table, newObj); err != nil {
		return err
	}
	return nil
}

//string|int value works for now
func UpdateKVS(table, id string, kvs map[string]interface{}) error {
	union := ""
	for key, v := range kvs { //key should be [json-path], e.g:$.id
		switch value := v.(type) {
		case string:
			union = union + ",'" + key + "','" + value + "'"
		case int, int32, int64, uint, uint32, uint64:
			union = union + ",'" + key + "'," + fmt.Sprint(value)
		default:
			return fmt.Errorf("unknown type: %+v", v)
		}
	}
	sql := "UPDATE " + table + " SET data=" + "JSON_SET(data" + union + ") WHERE data->'$.id'='" + id + "'"
	_, err := DB.Exec(sql)
	return err
}

func Delete(table, id string) error {
	tx, err := DB.Begin()
	if err != nil {
		return err
	}
	if err := DeleteTx(tx, table, id); err != nil {
		tx.Rollback()
		return err
	}
	if err := tx.Commit(); err != nil {
		tx.Rollback()
		return err
	}
	return nil
}

func DeleteTx(tx *sql.Tx, table, id string) error {
	sql := "DELETE FROM " + table + " WHERE data->'$.id'='" + id + "'"
	_, err := tx.Exec(sql)
	return err
}

func UpdateUUId(table, uuId string, kvs map[string]interface{}) error {
	union := ""
	for key, v := range kvs { //key should be [json-path], e.g:$.id
		switch value := v.(type) {
		case string:
			union = union + ",'" + key + "','" + value + "'"
		case int, int32, int64, uint, uint32, uint64:
			union = union + ",'" + key + "'," + fmt.Sprint(value)
		default:
			log.Printf("unknown type: %+v", v)
		}
	}
	sql := "UPDATE " + table + " SET data=" + "JSON_SET(data" + union + ") WHERE data->'$.uu_id'='" + uuId + "'"
	_, err := DB.Exec(sql)
	return err
}

func DeleteUUId(table, uuId string) error {
	sql := "DELETE FROM " + table + " WHERE data->'$.uu_id'='" + uuId + "'"
	_, err := DB.Exec(sql)
	return err
}
