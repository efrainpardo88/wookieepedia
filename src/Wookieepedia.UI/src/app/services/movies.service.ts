import { Injectable } from '@angular/core';
import {HttpHeaders, HttpCliente} from '@angular/common/http';
import {Observable} from 'rxjs';
import{ Movies} from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseur1 = 'http://swapi.py4e.com/api/';

  httpOptions ={
    headers: new HttpHeaders({'content.Type':'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient,) { }

  getById(id: string): Observable<Movies> {
    return this.http.get<movies>(this.baseur1 + '/people/' + id + '/?format=jason' )}
    
  getMovies (){}

  getMoviesByFilter (filter: string){}

  getMoviesByUrlEndpoint (url: string){}
}

