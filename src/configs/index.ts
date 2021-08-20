import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_HOSTNAME || 3001;
const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

export default {
  server: SERVER,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/monla',
  bcryptSaltRounds: 10,
};
