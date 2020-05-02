import { Injectable } from '@angular/core';
import {HttpHeaders, HttpCliente} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Starships} from '../models/starships';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private baseur1 = 'http://swapi.py4e.com/api/';
  httpOptions ={
    headers: new HttpHeaders({'content.Type':'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor( 
    private http: HttpClient,
  ) { }
  getStarshipsById(id: string): Observable<Species> {
    return this.http.get<species>(this.baseur1 + '/people/' + id + '/?format=jason' )}

    getStarships (){

    }
    getStarshipsByFilter (filter: string){

    }
    getStarshipsByUrlEndpoint (url: string){
      
    }
}
