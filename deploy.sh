#!/bin/bash -e

cp -r browser-as-our-framework/ build/
cp -r what-is-polymer build/
cp index.html build/

cd build/
git add .
git commit -m "Update live version"
git push
