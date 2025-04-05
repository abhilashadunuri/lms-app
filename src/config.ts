import dotenv from 'dotenv';
import e from 'express';
dotenv.config();


const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/lms-app',
}

export default ENV;