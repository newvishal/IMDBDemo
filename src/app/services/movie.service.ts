import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

import {Movies} from '../dashboard/movies/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}`, options);
  }

  getMovieId(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}`, options);
  }

  addMovie(movie: Movies) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post(`${environment.apiUrl}`, movie, options);
  }

  updateMovie(movieId: string, movie: Movies) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.put(`${environment.apiUrl}`, movie, options);
  }

  removeMovie(movieId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.delete(`${environment.apiUrl}`, options);
  }
}
