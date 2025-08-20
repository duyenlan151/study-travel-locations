#!/bin/bash
# Run container with a fixed name
IMAGE_NAME=study-travel-locations
CONTAINER_NAME=study-travel-locations

# 🛑 Stop old container if running
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  echo "🛑 Stopping and removing old container: $CONTAINER_NAME"
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
fi

# 🚀 Run new container
echo "🚀 Starting new container: $CONTAINER_NAME"
docker run -d --name $CONTAINER_NAME -p 4000:3000 $IMAGE_NAME
