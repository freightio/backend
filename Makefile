# Variables
SERVICE=backend
IMG_HUB?=registry.test.com/backend
TAG?=latest
# Version information
VERSION=1.0.0
REVISION=${shell git rev-parse --short HEAD}
RELEASE=production
BUILD_HASH=${shell git rev-parse HEAD}
BUILD_TIME=${shell date "+%Y-%m-%d@%H:%M:%SZ%z"}
LD_FLAGS:=-X main.Version=$(VERSION) -X main.Revision=$(REVISION) -X main.Release=$(RELEASE) -X main.BuildHash=$(BUILD_HASH) -X main.BuildTime=$(BUILD_TIME)

ifeq (${shell uname -s}, Darwin)
	SED=gsed
else
	SED=sed
endif

prepare:
	go install github.com/freightio/api-gateway/plugin/...

generate-go:
	@protoc -I${GOPATH}/src \
	-I${GOPATH}/src/github.com/freightio/api-gateway/third_party \
	--gogogo_out=\
	Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/empty.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,\
	plugins=grpc:../../../ \
	 $(shell pwd)/service/*.proto
	@$(SED) -i '/google\/api/d' service/*.pb.go
	@echo Generate successfully.

generate-js:
	@-mkdir $(shell pwd)/service/js > /dev/null 2>&1  || true
	protoc -I./service service/*.proto \
	--js_out=import_style=commonjs:service/js \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:service/js
	cp -rf service/js/* ../ui/src/sdk

build:prepare generate-go
	go build -ldflags="$(LD_FLAGS)" -o bundles/$(SERVICE) internal/cmd/main.go

image:build
	docker build -t $(IMG_HUB)/$(SERVICE):$(TAG) .

run:image
	@-docker service rm $(SERVICE) > /dev/null 2>&1  || true	
	@docker service create --name $(SERVICE) --network devel $(IMG_HUB)/$(SERVICE):$(TAG)

test:
	go test -cover ./...

# PHONY
.PHONY : test test-integration generate fmt
