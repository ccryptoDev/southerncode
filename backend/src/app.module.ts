import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { PopulateMovieCommand } from './scripts/populate-movie.command';
import { PopulateMovieService } from './scripts/populate-movie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    // CommandModule,
    DatabaseModule,
    MoviesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // PopulateMovieCommand,
    // PopulateMovieService
  ],
})
export class AppModule {}
