FROM node:18.20.0-alpine

RUN mkdir /srv/linkly
WORKDIR /srv/linkly
COPY package.json . 
COPY package-lock.json . 
RUN npm install

COPY . .

ENV PORT=3000
ENV NODE_ENV=production

ENTRYPOINT [ "node", "index.js" ]