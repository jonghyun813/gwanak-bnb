import dotenv from 'dotenv';

dotenv.config();

const env = {
  port: Number(process.env.PORT) || 4000,
  mongodbUri: process.env.MONGODB_URI || '',
};

export { env };
