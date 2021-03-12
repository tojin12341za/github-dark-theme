#!/bin/bash

echo "----------------------------------------------------------------------"
echo "Upload GitHub Dark Theme Firefox Add-ons to https://addons.mozilla.org"
echo "----------------------------------------------------------------------"

npm i shipit-cli shipit-deploy && npx shipit firefox ./dist-firefox
