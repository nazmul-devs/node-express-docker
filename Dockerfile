FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

VOLUME [ "/app/node_modules" ]

CMD [ "npm", "run", "dev" ]
