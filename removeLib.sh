#!/bin/bash

FILE="package.json"

REMOVE_DEV_DEPENDENCIES="devDependencies"

sed -i '/\'"$REMOVE_DEV_DEPENDENCIES"'/,/}/ d; /^$/d' $FILE
