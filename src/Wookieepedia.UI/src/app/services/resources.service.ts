import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private baseurl = 'http://swapi.py4e.com/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'content.Type': 'aplication/jason', 'Acces-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient ) { }

  getFullResource(resourceName: string): Observable<Resource> {
    return this.http.get<Resource>(this.baseurl + '/' + resourceName + '?format=json')
  }

  getFilteredResource(filter: string, resourceName: string): Observable<Resource> {
    return this.http.get<Resource>(this.baseurl + '/' + resourceName + '?search=' + filter + '&format=json')
  }

  getResourceByUrl(url: string): Observable<Resource> {
    return this.http.get<Resource>(url + '&format=json')
  }
}
