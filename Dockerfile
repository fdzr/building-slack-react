FROM node:18-alpine3.15

WORKDIR app/

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .
RUN npm install
# RUN npm install -g create-react-app

COPY . ./
