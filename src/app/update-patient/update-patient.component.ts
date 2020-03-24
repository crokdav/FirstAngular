import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin';
import Swal from 'sweetalert2';


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


    // methode Post update
upPatient (idPatient : number , patient: Patient) {
  this.patientService.updatePatient(idPatient, patient).subscribe(
    data=> {
      if (data['idPatient']==0){

      }
      else if (data['idPatient']) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.patient.nomPatient+' patient modifié',
          showConfirmButton: false,
          timer: 1500
        }).then ( () => {
          window.location.href ="http://localhost:4200/patient"
        }
        )
      }
    }
  )
}
















// methode pour comparer, ici on compare deux objets de type Medecin
compareFn(c1: Medecin, c2: Medecin): boolean {
  return c1 && c2 ? c1.idMedecin === c2.idMedecin : c1 === c2;
}

// pour la methode Update besoin de recupérer l'id afin de renvoyer la modification
ngOnInit(): void {
  this.patientService.getbyId(this.patient.idPatient).subscribe(
    data=>{
      this.patient=data;
    }
  )
    //Permet d'avoir accés à la liste des Hopitaux afin de pouvoir modifié l'hopital associé
  this.medecinService.getAll().subscribe (
    data => {
      this.listMedecins =data;
    }
  )
  }



}

