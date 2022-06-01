const express = require('express');
const redis = require('redis');
const redisCommand = require('./redis-wrapper');
require('dotenv').config();

var redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

redisClient.on('error', (err) => console.log('Redis Client Error', err));

const connectToRedis = async client => {
    await client.connect();

    console.log('connected');

    await redisCommand.set(client, 'greeting', {type: 'basic', message: 'hello  world'});
    
    console.log('set');

    const value = await redisCommand.get(client, 'greeting');

    console.log(value);
}

connectToRedis(redisClient);

