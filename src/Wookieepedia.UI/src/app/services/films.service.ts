import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import{ Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseurl = 'http://swapi.py4e.com/api/';

  httpOptions ={
    headers: new HttpHeaders({'content.Type':'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient,) { }

  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(this.baseurl + '/films/' + id + '/?&format=json')
  }
}

