import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/patient';
import {PatientService} from '../services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  listPatients : Patient[]= [];
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe (
      data => {
        this.listPatients =data;
      }
    )
  }
  deletPatient(idPAtient : number){
    this.patientService.deletePatient(idPAtient).subscribe(
      data=> {console.log(data)}
    )
  }
}
