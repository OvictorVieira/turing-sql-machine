FROM node:14

WORKDIR /app

COPY api/package*.json ./api/

RUN npm install

COPY . .

EXPOSE 3000

WORKDIR /app

CMD ["npm", "start"]
