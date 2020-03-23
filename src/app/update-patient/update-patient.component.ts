import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient : Patient = new Patient();
idPatientUrl : number;
listMedecins : Medecin[]=[];
  constructor(private patientService : PatientService , private route: ActivatedRoute,private medecinService : MedecinService) {

    this.patient.idPatient =parseInt (this.route.snapshot.paramMap.get('idPatient'));
    
   }


  
upPatient (idPatient : number , patient: Patient) {
  this.patientService.updatePatient(idPatient, patient).subscribe(
    data=> {
      console.log(data)
    }
  )
}
ngOnInit(): void {
  this.patientService.getbyId(this.patient.idPatient).subscribe(
    data=>{
      this.patient=data;
    }
  )
  this.medecinService.getAll().subscribe (
    data => {
      this.listMedecins =data;
    }
  )
  }



}

