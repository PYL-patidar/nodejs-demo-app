# ---Stage 1: Base Image for Nodejs application
FROM node:22-slim AS build

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["node", "app.js"]