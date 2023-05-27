FROM node:16.16.0-alpine

RUN mkdir -p /var/www/apps/the-vaper-frontend
WORKDIR /var/www/apps/the-vaper-frontend

COPY package*.json ./

RUN npm i -g nuxt

RUN npm install -legacy-peer-deps

COPY . .

RUN npm run build

RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "npm", "start" ]