FROM node:18.20.0-alpine

WORKDIR /srv/linkly
COPY . .
RUN npm install

ENV PORT=3000
ENV NODE_ENV=production

ENTRYPOINT [ "node", "index.js" ]