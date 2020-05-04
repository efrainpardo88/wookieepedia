import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Species } from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient

  ) { }

  getSpeciesById(id: string): Observable<Species> {
    return this.http.get<Species>(this.baseurl + 'species/' + id + '/?format=json');
  }

}
