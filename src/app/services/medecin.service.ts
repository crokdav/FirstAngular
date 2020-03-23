import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medecin} from '../models/medecin'
import { pipe } from'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Medecin[]>('http://localhost:8080/medecin/all').pipe()
  }
  create(medecin : Medecin) {
    return this.http.post<Medecin>('http://localhost:8080/medecin/creat', medecin).pipe()
  }
  deleteMedecin(idMedecin: number) {
    return this.http.delete<Number>('http://localhost:8080/medecin/delete/'+idMedecin).pipe();
  }
  updateMedecin (idMedecin: number, medecin : Medecin) {
    return this.http.put<Medecin>('http://localhost:8080/medecin/update/'+idMedecin, medecin).pipe();
  }
  getbyId (idMedecin: number) {
    return this.http.get<Medecin>('http://localhost:8080/medecin/get/'+idMedecin).pipe();
  }
}
