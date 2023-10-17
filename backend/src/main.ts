import { NestFactory } from '@nestjs/core';
import { CommandParamTypes } from 'nestjs-command';
import { AppModule } from './app.module';
import * as express from 'express';
import { appConfig } from './config/config.constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const frontURL = appConfig.FRONT_URL;

  // Enable CORS
  app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    (req, res, next) => {
      res.header('Access-Control-Allow-Origin', frontURL);
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    }
  );
  
  const port = appConfig.APP_PORT;
  console.log(`App is listening on port ${port}`);
  await app.listen(3000);
}
bootstrap();
