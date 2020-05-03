import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };
  
  constructor(
    private http: HttpClient

  ) { }

  getPeopleById(id: string): Observable<People> {
    return this.http.get<People>(this.baseurl + '/people/' + id + '/?&format=json');
  }

}
