import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll() {
    return this.moviesService.findAll();
  }

  // @Get(':tmdbId')
  // async findByTmdbId(@Param('tmdbId') tmdbId: number) {
  //   return this.moviesService.findByTmdbId(tmdbId);
  // }

  @Get('getMovieList')
  async getMovieList() {
    return this.moviesService.getMovieList()
  }

  // You can add more endpoints for managing movies, reviews, and user interactions.
}
