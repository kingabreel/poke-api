import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeClientService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}?offset=0&limit=9`)
  }

  getSpecificPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}${id}`)
  }
}
