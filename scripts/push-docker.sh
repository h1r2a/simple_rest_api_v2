#!/bin/bash
set -e
# Vérifier que les variables existent
if [ -z "$DOCKER_USERNAME" ] || [ -z "$DOCKER_PASSWORD" ]; then
  echo "DOCKER_USERNAME ou DOCKER_PASSWORD n'est pas défini."
  exit 1
fi
# Login DockerHub
echo " Log in DockerHub..."
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
# Construire l’image
echo "Building simple_rest_api image..."
docker build -f Dockerfile -t $DOCKER_USERNAME/simple_rest_api:latest .
echo " Image built successfully!"
# Pousser sur Docker Hub
echo "Pushing image to DockerHub..."
docker push $DOCKER_USERNAME/simple_rest_api:latest
echo "Image pushed successfully!"
