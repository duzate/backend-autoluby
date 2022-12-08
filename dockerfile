FROM node:alpine

RUN apk add --no-cache bash

USER node

WORKDIR /usr/api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "migration:run" ]
