FROM node:18 as node_modules

WORKDIR /home/app

COPY package.json yarn.lock ./

RUN yarn install

FROM node_modules as build

WORKDIR /home/app

COPY . .

ENV NEXT_PUBLIC_API_SERVER=http://localhost:4000

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start"]