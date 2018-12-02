package biz

import (
	"fmt"
	"log"
	"math"
	"strconv"
)

func test() {
	lat1 := 29.490295
	lng1 := 106.486654
	lat2 := 29.615467
	lng2 := 106.581515
	fmt.Println(EarthDistance(lat1, lng1, lat2, lng2))
}

// 返回值的单位为米
func EarthDistance(lat1, lng1, lat2, lng2 float64) float64 {
	radius := float64(6371000) // 6378137
	rad := math.Pi / 180.0
	lat1 = lat1 * rad
	lng1 = lng1 * rad
	lat2 = lat2 * rad
	lng2 = lng2 * rad
	theta := lng2 - lng1
	dist := math.Acos(math.Sin(lat1)*math.Sin(lat2) + math.Cos(lat1)*math.Cos(lat2)*math.Cos(theta))
	return dist * radius
}

func S2F(value string) float64 {
	v2, err := strconv.ParseFloat(value, 64)
	if err != nil {
		log.Println(err)
	}
	return v2
}
