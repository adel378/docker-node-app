const express = require('express'); // call library
const app = express(); // إنشاء السيرفر
const mongoose = require('mongoose');
const redis = require('redis');
const PORT = 3000 ;

const redis_port = 6379;
const redis_host = 'redis';
const redisclient = redis.createClient({
    url: `redis://${redis_host}:${redis_port} `
});
redisclient.on("error", (err) => console.log("Redis Client Error", err));
redisclient.on("connect", () => console.log("connect to redis"));
redisclient.connect();

// mongoose.connect('mongodb://username:password@host:port/database?options...');
const DB_USR = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = '27017';
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USR}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
 mongoose.connect(URI).then(() => console.log('connect to db')).catch((err) => console.log('failed to connect to db : ', err));

// Route بسيط
app.get('/', (req, res) => res.send('<h1>Hello from Express Server ,hello </h1>!'));


// Start server
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
