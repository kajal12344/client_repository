#!/bin/bash

# install the anuglar dependency
# npm install

# build the application


ng build --prod

# remove the container if exists or running
if [ $(sudo docker container ls -q --filter name=my_app_client_container) != '' ]; then
   sudo docker container stop my_app_client_container
   sudo docker container rm my_app_client_container
fi

# remove the image if exists
if [ $(sudo docker image ls -q --filter reference=my_app_client) != '' ]; then
   sudo docker image rm my_app_client
fi

# build the image
sudo docker build -t my_app_client .

# start the container
sudo docker run -itd -p 9090:80 --name my_app_client_container my_app_client
