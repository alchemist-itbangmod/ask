FROM node:8-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY ./*.js ./
COPY ./src ./src

EXPOSE 3000

CMD [ "yarn", "start" ]
