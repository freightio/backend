package biz

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"log"
	mr "math/rand"
	"net/url"
	"sort"
	"time"

	"github.com/jmzwcn/authz/key"
)

type BizContent struct {
	Subject     string  `json:"subject"`
	OutTradeNo  string  `json:"out_trade_no"`
	TotalAmount float32 `json:"total_amount"`
	ProductCode string  `json:"product_code"`
}

func SignAlipay(totalAmount float32) (string, error) {
	bizContent := BizContent{
		Subject:     "货运物联-订单费用",
		OutTradeNo:  "bj-gd-" + fmt.Sprint(time.Now().Unix()) + fmt.Sprint(mr.Intn(10)),
		ProductCode: "QUICK_MSECURITY_PAY",
		TotalAmount: totalAmount,
	}

	data := url.Values{}
	data.Add("app_id", "2018111762227213")
	data.Add("method", "alipay.trade.app.pay")
	// if returnUrl != "" {
	// 	data.Add("return_url",returnUrl) }
	// 	 if notifyUrl != "" {
	// 		 data.Add("notify_url", returnUrl) }
	//data.Add("format", "json")
	data.Add("charset", "utf-8")
	data.Add("sign_type", "RSA2")
	data.Add("timestamp", time.Now().Format("2006-01-02 15:04:05"))
	data.Add("version", "1.0")
	bc, err := json.Marshal(bizContent)
	if err != nil {
		log.Println(err)
		return "", err
	}
	data.Add("biz_content", string(bc))
	data.Add("sign", sign(data))
	return data.Encode(), nil
}

func sign(m url.Values) string {
	//对url.values进行排序
	sign := ""
	var keys []string
	for k := range m {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	for i, k := range keys {
		if m.Get(k) != "" {
			if i == 0 {
				sign = k + "=" + m.Get(k)
			} else {
				sign = sign + "&" + k + "=" + m.Get(k)
			}
		}
	}
	b, err := rsaEncrypt([]byte(sign))
	if err != nil {
		log.Println(err)
	}
	fmt.Println("加密：", b)
	fmt.Println("base加密：", base64.StdEncoding.EncodeToString(b))
	return base64.StdEncoding.EncodeToString(b)
}

func rsaEncrypt(origData []byte) ([]byte, error) {
	block, _ := pem.Decode([]byte(key.PRIVATE_KEY))
	if block == nil {
		fmt.Println("block空")
		return nil, nil
	}
	priv, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	if err != nil {
		fmt.Println("无法还原私钥")
		return nil, nil
	}
	h2 := sha256.New()
	h2.Write(origData)
	hashed := h2.Sum(nil)
	signature2, err := rsa.SignPKCS1v15(rand.Reader, priv, crypto.SHA256, hashed)
	return signature2, err
}
