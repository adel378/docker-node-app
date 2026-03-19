FROM node:20 as development
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . . 
EXPOSE 3000
ENV CHOKIDAR_USEPOLLING=true
CMD [ "npm", "run", "start-dev" ] 

FROM node:20 as production
WORKDIR /app
COPY package.json /app
RUN npm install --only=production 
COPY . . 
EXPOSE 3000
ENV CHOKIDAR_USEPOLLING=true
CMD [ "npm", "start" ]
