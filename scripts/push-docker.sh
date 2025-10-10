#!/bin/bash
set -e
# Vérifier que les variables existent
#if [ -z "$DOCKER_USERNAME" ] || [ -z "$DOCKER_PASSWORD" ]; then
#  echo "DOCKER_USERNAME ou DOCKER_PASSWORD n'est pas défini."
#  exit 1
#fi
# Login DockerHub
echo " Log in DockerHub..."
echo $DOCKER_USERNAME
echo $DOCKER_PASSWORD
# echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
echo harenaapple88 | docker login -u harenadocker --password-stdin
# Construire l’image
echo "Building simple-node-restapi image..."
# docker build -f Dockerfile -t harenadocker/simple-node-restapi:latest .
echo " Image built successfully!"
# Pousser sur Docker Hub
echo "Pushing image to DockerHub..."
# docker push harenadocker/simple-node-restapi:latest
echo "Image pushed successfully!"
