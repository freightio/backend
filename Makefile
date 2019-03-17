# Variables
SERVICE=backend
IMG_HUB?=docker.io/jmzwcn
# Version information
VERSION=1.0.0
REVISION=${shell git rev-parse --short HEAD}
RELEASE=production
BUILD_HASH=${shell git rev-parse HEAD}
BUILD_TIME=${shell date "+%Y-%m-%d@%H:%M:%SZ%z"}
LD_FLAGS:=-X main.Version=$(VERSION) -X main.Revision=$(REVISION) -X main.Release=$(RELEASE) -X main.BuildHash=$(BUILD_HASH) -X main.BuildTime=$(BUILD_TIME)
TAG?=${shell date "+%Y%m%d-%H%M"}

ifeq (${shell uname -s}, Darwin)
	SED=gsed
else
	SED=sed
endif

prepare:
#	go install github.com/freightio/api-gateway/plugin/...
	go get github.com/gogo/protobuf/protoc-gen-gogofaster
#	go get github.com/golang/protobuf/protoc-gen-go
	@-docker swarm init
	@-docker network create --driver=overlay devel

generate:generate-js generate-go

generate-go:
	@protoc -I./service --gogofaster_out=\
	Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/struct.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/empty.proto=github.com/gogo/protobuf/types,\
	Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,\
	plugins=grpc:./service/sdk/go service/*.proto
	@$(SED) -i '/google\/api/d' service/sdk/go/*.pb.go
	@echo Generate-go successfully.

generate-js:
	@-mkdir service/sdk/js > /dev/null 2>&1  || true
	@protoc -I./service service/*.proto \
	--js_out=import_style=commonjs:service/sdk/js \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:service/sdk/js
	cp -rf service/sdk/js/* ../client/src/sdk
	@echo Generate-js successfully.

build:#prepare generate-go
	go build -ldflags='-linkmode external -extldflags -static $(LD_FLAGS)' -o bundles/$(SERVICE) internal/cmd/*.go

image:build
	docker build -t $(IMG_HUB)/$(SERVICE):$(TAG) .

push:image
	docker push $(IMG_HUB)/$(SERVICE):$(TAG)

run:image
	@-docker service rm $(SERVICE) > /dev/null 2>&1  || true	
	@docker service create --name $(SERVICE) --network devel $(IMG_HUB)/$(SERVICE):$(TAG)

test:
	go test -cover ./...

# PHONY
.PHONY : test test-integration generate fmt
