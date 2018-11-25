package biz

import (
	"fmt"
	"regexp"
	"testing"
)

func TestPrimaryKey(t *testing.T) {
	checkTable("test")
	DB.Exec("drop table test")
}

func TestJsonEscape(t *testing.T) {
	goods := Goods{Id: "iii"}
	goods.Desc = "~!@#$%^&*()_+{}|:\";',./<>?'"
	fmt.Println(goods.Desc)
	if err := Insert("test1", goods); err != nil {
		t.Error(err)
	}
	var g1 Goods
	if err := GetById("test1", "iii", &g1); err != nil {
		t.Error(err)
	}
	fmt.Println(g1.Desc)
	DB.Exec("drop table test1")
}

type Goods struct {
	Id   string `json:"id,omitempty"`
	Name string
	Desc string
}

func TestRegexp(t *testing.T) {
	matched, err := regexp.MatchString("s.*a.*od", "seafoodrtt")
	fmt.Println(matched, err)
	t.Error("end")
}
