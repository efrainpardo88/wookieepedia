import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Starship} from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient

  ) { }

  getStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.baseurl + 'starships/' + id + '/?format=json');
  }

}
