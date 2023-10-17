import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie/schemas/movie.schema';
import { appConfig } from '../config/config.constants';

@Injectable()
export class MoviesService {
  constructor(
    private httpService: HttpService,
    @InjectModel(Movie.name) private movieModel: Model<Movie>
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findByTmdbId(tmdbId: number): Promise<Movie | null> {
    return this.movieModel.findOne({ id: tmdbId }).exec();
  }

  async getMovieList() {
    const apiKey = appConfig.TMDB_API_KEY;
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    const queryParams = {
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.desc'
    };
    
    const response: AxiosResponse = await this.httpService
    .get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      params: queryParams
    })
    .toPromise();

    return response.data;
  }
}
