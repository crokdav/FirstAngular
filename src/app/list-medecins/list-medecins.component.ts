import { Component, OnInit } from '@angular/core';

import { MedecinService} from '../services/medecin.service';
import {Medecin} from '../models/medecin'
import Swal from 'sweetalert2'



@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {

  listMedecins : Medecin[]=[];


  constructor( private medecinService : MedecinService) { }
// methode liste juste un get qui apelle tout
  ngOnInit(): void {
    this.medecinService.getAll().subscribe (
      data => {
        this.listMedecins =data;
      }
    )
  }





// methode delete voir la methode dans le service, on apelle l'idMedecin, comme dans le controller Spring qu est de type number
  deletMedecin(idMedecin : number){
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
        this.medecinService.deleteMedecin(idMedecin).subscribe(
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
