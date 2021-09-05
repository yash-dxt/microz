FROM node:alpine

WORKDIR /

COPY package.json .
RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]