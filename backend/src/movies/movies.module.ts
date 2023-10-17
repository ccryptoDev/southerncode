import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie, MovieSchema } from './movie/schemas/movie.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
