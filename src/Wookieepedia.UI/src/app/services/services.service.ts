import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api
    
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' })
    };
  
    constructor(
      private http: HttpClient,
      
    ){ }
  
    getinfo(segmento:string, dato:string): Observable<[]> {
      return this.http.get<[]>(this.baseurl + segmento + '/'+ dato + '/?format=json')
    }
  
  
  }
