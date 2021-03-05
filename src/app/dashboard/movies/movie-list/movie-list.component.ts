import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(public movieServ: MovieService) { }

  ngOnInit(): void {
      this.getAllMovie()
  }

  getAllMovie() {
      this.movieServ.getMovies().subscribe((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
  }

}
