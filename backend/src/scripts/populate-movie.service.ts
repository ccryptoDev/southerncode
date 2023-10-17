import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
require('dotenv').config();

@Injectable()
export class PopulateMovieService {
  constructor(private readonly httpService: HttpService) {}

  async populateMovies(page: number) {
    try {
      const API_KEY = process.env.TMDB_API_KEY;
      const TMDB_BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

      const response: AxiosResponse = await this.httpService
        .get(TMDB_BASE_URL, {
          params: {
            api_key: API_KEY,
            page: page, // Pass the page parameter to the API
            // Add any other query parameters as needed
          },
        })
        .toPromise();

      // Extract movie data from the API response
      const moviesData = response.data.results;

      // Loop through moviesData and store each movie in the database
      for (const movie of moviesData) {
        // Create and save a new Movies document (if you have defined a model)
        // const newMovie = new Movies(movie);
        // await newMovie.save();
      }

      console.log('Movies successfully populated.');
    } catch (error) {
      console.error('Error populating movies:', error);
    }
  }
}
