FROM node:14

WORKDIR /app

COPY api/package*.json ./api/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

WORKDIR /app

CMD ["npm", "start"]
