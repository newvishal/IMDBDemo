import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getSingle() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': '',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.get(`${environment.apiUrl}`, options);
  }
}
