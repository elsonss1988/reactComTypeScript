FROM node:14.15.4-alpine3.12

USER node

WORKDIR /home/node/app

COPY . .

# RUN npm install

ENTRYPOINT [ ".docker/entrypoint.sh" ]