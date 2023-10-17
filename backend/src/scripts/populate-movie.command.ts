import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { PopulateMovieService } from './populate-movie.service';

@Injectable()
export class PopulateMovieCommand {
  constructor(private readonly populateMovieService: PopulateMovieService) {}

  @Command({
    command: 'populate-movie <page>',
    describe: 'Populate the database with movies',
  })
  async handle(@Positional({ name: 'page', describe: 'Page number', type: 'number', default: 1 }) page: number) {
    await this.populateMovieService.populateMovies(page);
  }
}
