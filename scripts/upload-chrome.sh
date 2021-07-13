#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload GitHub Dark Theme Chrome extension to Chrome Web Store"
echo "----------------------------------------------------------------------"

npm i @wext/shipit && npx shipit chrome ./dist-chrome