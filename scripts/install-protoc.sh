#!/usr/bin/env bash

# https://tutorials.cosmos.network/tutorials/7-cosmjs/5-create-custom.html
# https://grpc.io/docs/protoc-installation/

mkdir -p /usr/lib/protoc
cd /usr/lib/protoc
curl -L https://github.com/protocolbuffers/protobuf/releases/download/v25.9/protoc-25.9-linux-x86_64.zip -o protoc.zip
unzip -o protoc.zip
rm protoc.zip
ln -s /usr/lib/protoc/bin/protoc /usr/local/bin/protoc
npm install ts-proto@1.180.0 --save-dev
