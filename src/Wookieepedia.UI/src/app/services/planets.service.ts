import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient

  ) { }

  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.baseurl + '/planet/' + id + '/?format=json');
  }

}
