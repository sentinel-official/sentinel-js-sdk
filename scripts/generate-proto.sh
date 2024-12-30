#!/usr/bin/env bash

# https://github.com/sentinel-official/hub/blob/development/proto/buf.yaml

RED="\e[31m"
GREEN="\e[32m"
YELLOW="\e[33m"
ENDCOLOR="\e[0m"

REQUIREMENTS=("git" "protoc")
TS_OUTPUT="../src/protobuf"
TMP_FOLDER="./proto"

echo -e "${GREEN}Typescript output folder: $TS_OUTPUT.\nProto download temp directory: ${TMP_FOLDER}${ENDCOLOR}"

# https://github.com/stephenh/ts-proto
TS_PROTOPATH="../node_modules/ts-proto/protoc-gen-ts_proto"
if [ ! -f "$TS_PROTOPATH" ]; then
    echo -e "${RED}$TS_PROTOPATH does not exist.${ENDCOLOR}"
    exit 1
fi

for r in "${REQUIREMENTS[@]}"
do
  if ! type $r > /dev/null; then
    echo -e "${RED}Please install $r, unable to continue${ENDCOLOR}"
    exit 1
  fi
done

mkdir -p $TMP_FOLDER

# Clone repository
# Checkout only the folder that contain .proto files
# Move directory/*.proto files to TMP_FOLDER
# Remove folder

# Sentinel hub
echo -e "\n${YELLOW}Cloning sentinel-official/hub@v12.0.0-rc8 /proto/sentinel${ENDCOLOR}"
git clone -n --depth=1 --branch v12.0.0-rc8 https://github.com/sentinel-official/hub.git sentinel && \
  git -C sentinel sparse-checkout set --no-cone proto/sentinel && \
  git -C sentinel checkout && \
  mv sentinel/proto/sentinel $TMP_FOLDER && \
  rm -rf sentinel/

# 3th parties
echo -e "\n${YELLOW}Cloning cosmos/cosmos-sdk@v0.47.0 /proto/*${ENDCOLOR}"
git clone -n --depth=1 --branch v0.47.0 https://github.com/cosmos/cosmos-sdk.git cosmos && \
  git -C cosmos sparse-checkout set --no-cone proto/ && \
  git -C cosmos checkout && \
  mv cosmos/proto/cosmos $TMP_FOLDER && \
  mv cosmos/proto/amino $TMP_FOLDER && \
  mv cosmos/proto/tendermint $TMP_FOLDER && \
  rm -rf cosmos/

echo -e "\n${YELLOW}Cloning cosmos/cosmos-proto@main /proto/cosmos_proto${ENDCOLOR}"
git clone -n --depth=1 --branch main https://github.com/cosmos/cosmos-proto.git cosmos_proto && \
  git -C cosmos_proto sparse-checkout set --no-cone proto/cosmos_proto && \
  git -C cosmos_proto checkout && \
  mv cosmos_proto/proto/cosmos_proto $TMP_FOLDER && \
  rm -rf cosmos_proto/

echo -e "\n${YELLOW}Cloning cosmos/gogoproto@main /gogoproto${ENDCOLOR}"
git clone -n --depth=1 --branch main https://github.com/cosmos/gogoproto.git gogoproto && \
  git -C gogoproto sparse-checkout set --no-cone gogoproto && \
  git -C gogoproto checkout && \
  mv gogoproto/gogoproto $TMP_FOLDER && \
  rm -rf gogoproto/

echo -e "\n${YELLOW}Cloning googleapis/googleapis@common-protos-1_3_1 /google${ENDCOLOR}"
git clone -n --depth=1 --branch common-protos-1_3_1 https://github.com/googleapis/googleapis.git google && \
  git -C google sparse-checkout set --no-cone google && \
  git -C google checkout && \
  mv google/google $TMP_FOLDER && \
  rm -rf google/

echo -e "${YELLOW}\n\nConverting $TMP_FOLDER/sentinel/*.proto files to ts\n${ENDCOLOR}"

mkdir -p $TS_OUTPUT && \
protoc \
  --plugin=$TS_PROTOPATH \
  --ts_proto_out=$TS_OUTPUT \
  --proto_path=$TMP_FOLDER \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages,useExactTypes=false" \
  $(find $TMP_FOLDER/sentinel -iname "*.proto")

# Remove temp directory
rm -rf $TMP_FOLDER

# List subfolders
ls -lah "$TS_OUTPUT/sentinel"