#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload GitHub Dark Theme Chrome extension to Chrome Web Store"
echo "----------------------------------------------------------------------"

npm i shipit-cli shipit-deploy && npx shipit chrome ./dist-chrome
