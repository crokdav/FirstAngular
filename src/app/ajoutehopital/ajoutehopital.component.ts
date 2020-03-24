import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';

//Importation de sweet alert, de type Type script
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajoutehopital',
  templateUrl: './ajoutehopital.component.html',
  styleUrls: ['./ajoutehopital.component.css']
})

export class AjoutehopitalComponent implements OnInit {
  //instantation
  newHopital : Hopital = new Hopital();

  constructor(private hopitalService : HopitalService)  { }
  //besoin d'un module qui va relié un formulaire on importe donc un module form dans le app-modules
  ngOnInit(): void {
  }
  // methode Create, avec l'instantation de la classe, juste en haut 
  createHopital(){
    this.hopitalService.postHopital(this.newHopital).subscribe(
      data => {
        if (data['idHopital'] == 0) {

        }else if (data['idHopital']) {
Swal.fire(
  'Hopital ajoutée!',
 this.newHopital.nomHopital+ ' a bien été ajouté!',
  'success'
).then( () => {
  window.location.href = "http://localhost:4200/hopital"
})
        }
      }
    )
  }

}
