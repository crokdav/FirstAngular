import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  newPatient : Patient = new Patient();
  listMedecins : Medecin[]=[];
  constructor(private patientService : PatientService,private medecinService : MedecinService )  { }
  //besoin d'un module qui va relié un formulaire on importe donc un module form dans le app-modules
  ngOnInit(): void {
    this.medecinService.getAll().subscribe (
      data => {
        this.listMedecins =data;
      }
    )
  }
  createPatient(){
    this.patientService.create(this.newPatient).subscribe(
      data => {
            if (data['idPatient'] == 0) {
    
            }else if (data['idPatient']) {
    Swal.fire(
      'Patient ajoutée!',
     this.newPatient.nomPatient+ ' a bien été ajouté!',
      'success'
    ).then( () => {
      window.location.href = "http://localhost:4200/patient"
    })
            }
          }
    )
      }
    
  
}
