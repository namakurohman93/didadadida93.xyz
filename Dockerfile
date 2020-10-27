# build the webpage
FROM node:lts-alpine AS build

WORKDIR /usr/frontend

COPY ./package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

# serve the static page using nginx
FROM nginx:stable-alpine

COPY --from=build /usr/frontend/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
