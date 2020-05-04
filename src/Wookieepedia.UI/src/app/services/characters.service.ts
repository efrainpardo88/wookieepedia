import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseur1 = 'http://swapi.py4e.com/api/';
  httpOptions ={
    headers: new HttpHeaders({'content.Type':'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient,) { }

  getCharacterById (id: string): Observable<Characters> {
      return this.http.get<Characters>(this.baseur1 + '/people/' + id + '/?format=jason' )}

      getCharacters (){

      }
      getCharactersByFilter (filter: string){

      }

      getCharactersByUrlEndpoint (url: string){
        
      }

}
