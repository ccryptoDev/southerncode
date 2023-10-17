import { Module } from '@nestjs/common';
import { appConfig } from './config.constants';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: appConfig.MONGODB_URI,
      }),
    }),
  ],
})
export class DatabaseModule {}
