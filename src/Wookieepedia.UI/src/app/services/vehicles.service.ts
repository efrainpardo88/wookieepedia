import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private baseurl = 'http://swapi.py4e.com/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient

  ) { }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.baseurl + 'vehicles/' + id + '/?format=json');
  }

}
