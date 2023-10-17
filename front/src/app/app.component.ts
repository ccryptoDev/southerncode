import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovieList().subscribe((data: any) => {
      console.log(data.results);
      this.movies = data.results;
    });
  }
}
