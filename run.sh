#! bin/sh

cd client

npm run build 

cd ..

git add .

git commit -m "finish"

git push