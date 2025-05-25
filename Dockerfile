FROM node:18.20.0-alpine

RUN mkdir /srv/linkly
WORKDIR /srv/linkly
COPY package.json . 
COPY package-lock.json . 
RUN npm install

COPY . .

# ENV PORT=80
ENV NODE_ENV=production

CMD [ "node", "index.js" ]