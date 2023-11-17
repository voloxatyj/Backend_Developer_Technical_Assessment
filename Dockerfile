FROM node:alpine As development

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]