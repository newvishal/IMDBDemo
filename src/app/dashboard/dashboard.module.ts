import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, AddMovieComponent, MovieListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent, AddMovieComponent, MovieListComponent]
})
export class DashboardModule { }
