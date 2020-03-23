import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from '../models/patient';
import { pipe } from'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Patient[]>('http://localhost:8080/patient/all').pipe()
  }
  create(patient : Patient) {
    return this.http.post<Patient>('http://localhost:8080/patient/creat', patient).pipe()
  }
  deletePatient(idPatient: number) {
    return this.http.delete<Number>('http://localhost:8080/patient/delete/'+idPatient).pipe();
  }
  updatePatient (idPatient : number, patient : Patient) {
    return this.http.put<Patient>('http://localhost:8080/patient/update/'+idPatient, patient).pipe();
  }
getbyId (idPatient: number) {
  return this.http.get<Patient>('http://localhost:8080/patient/get/'+idPatient).pipe();
}

}
