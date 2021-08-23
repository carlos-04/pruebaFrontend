import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonModel } from '../model/PersonModel';
import {delay, map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PersonService {


  private url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }
  //esta es la que me trae toda la informacion de los clientes
  getAllPerson(page: number = 0, limit: number = 8) {
    return this.http.get(`${this.url}/person?_page=${page}&_limit=${limit}`)
  }

  //paginacion
  getFilterPerson(buscar: string) {
    return this.http.get(`${this.url}/person?tipoDomi=${buscar}`)
  }
  createPerson(person: any) {
    return this.http.post<any>(`${this.url}/person`, person)
    .pipe(map((resp:any) => {

      return resp;
    }))
  }




}
