FROM node:24-alpine

WORKDIR /live-project

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm","start"]

