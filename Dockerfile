# 1. Image de base
FROM node:20-alpine
# 2. Définir le répertoire de travail dans le conteneur
WORKDIR /app
# 3. Copier les fichiers package.json et package-lock.json
COPY package*.json ./
# 4. Installer les dépendances (production seulement)
RUN npm install --production
# 5. Copier le reste du projet dans le conteneur
COPY . .
# 6. Définir le port exposé
EXPOSE 3000
# 7. Commande de démarrage
CMD ["npm", "start"]