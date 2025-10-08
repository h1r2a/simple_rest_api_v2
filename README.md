# Simple Node REST API
## Description
Cette application est une API REST simple en Node.js utilisant Express. Elle permet de gérer des utilisateurs avec les opérations suivantes : GET, POST, PUT.
## Installation
### 1. Cloner le projet :
```
git clone https://github.com/soniarimamy/simple-node-restapi.git
cd simple-node-restapi
```
### 2. Installer les dépendances :
```
npm install
```
## Lancer le projet
### En local (développement)
```
npm run dev
```
### Avec Docker (staging)
```
docker-compose up --build -d
```
## Test des services
- GET all users

```
curl http://localhost:3000/users
```
- POST create user
```
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'
```
- PUT update user
```
curl -X PUT http://localhost:3000/users/<user_id> -H "Content-Type: application/json" -d '{"name":"Bob"}'
