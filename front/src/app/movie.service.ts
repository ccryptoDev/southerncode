import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList() {
    // Replace 'your-movie-list-api-endpoint' with the actual endpoint URL
    return this.http.get('http://localhost:3000/movies/getMovieList');
  }

  getMovieDetails(id: any) {
    return this.http.get('http://localhost:3000/movie/' + id);
  }
}

