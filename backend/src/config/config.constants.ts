import { config } from 'dotenv';
config()

export const appConfig = {
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  MONGODB_URI: process.env.MONGODB_URI,
  FRONT_URL: process.env.FRONT_URL,
  APP_PORT: process.env.APP_PORT
};
