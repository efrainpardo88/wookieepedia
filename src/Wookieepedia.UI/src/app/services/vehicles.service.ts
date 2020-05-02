import { Injectable } from '@angular/core';
import {HttpHeaders, HttpCliente} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Vehicles} from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private baseur1 = 'http://swapi.py4e.com/api/';
  httpOptions ={
    headers: new HttpHeaders({'content.Type':'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient,) { }

    getVehicleById (id: string)  Observable<Vehicles> {
      return this.http.get<Vehicles>(this.baseur1 + '/people/' + id + '/?format=jason' )
    }

    getVehicles (){}
    getVehiclesByFilter (filter: string){}
    getVehiclesByUrlEndpoint (url: string){}
  }
