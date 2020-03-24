import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/patient';
import {PatientService} from '../services/patient.service';
import Swal from 'sweetalert2';

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Etes vous sur de vouloir le supprimer ?',
      text: "Les données seront supprimées",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuer',
      cancelButtonText: 'Retour',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.patientService.deletePatient(idPAtient).subscribe(
          data=> {
        swalWithBootstrapButtons.fire(
          'Supprimer!',
          'votre fichier a bien été supprimer.',
          'success'
        )
      }
      )
      window.location.href = "http://localhost:4200/medecin"
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'non supprimé',
          'Vos données sont sauves',
          'error'
        )
      }
    }
    )
  }

}
