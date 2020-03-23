import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hopital } from '../models/hopital';
import { pipe } from'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Hopital[]>('http://localhost:8080/hopital/all').pipe()// pipe equivaut au commit de git
  }

  postHopital(hopital : Hopital) {
    return this.http.post<Hopital>('http://localhost:8080/hopital/creat', hopital).pipe()// entre les pinces croceo cela correspond au type de retour voir Spring
  }

  deleteHopital(idHopital: number) {
    return this.http.delete<Number>('http://localhost:8080/hopital/delete/'+idHopital).pipe();
  }
  updateHopital (idHopital: number, hopital : Hopital) {
    return this.http.put<Hopital>('http://localhost:8080/hopital/update/'+idHopital, hopital).pipe();
  }
  getbyId (idHopital: number) {
    return this.http.get<Hopital>('http://localhost:8080/hopital/get/'+idHopital)
  }

}
