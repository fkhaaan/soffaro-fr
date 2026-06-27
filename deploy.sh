#!/bin/bash

#PRODUCTION

git reset --hard
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn
yarn run build

start "yarn run start:prod" --name=SOFFARO-FR