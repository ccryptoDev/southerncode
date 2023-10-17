import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
