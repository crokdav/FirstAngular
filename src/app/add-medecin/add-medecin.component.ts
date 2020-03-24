import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import {HopitalService} from '../services/hopital.service';
import { Hopital } from '../models/hopital';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  newMedecin : Medecin = new Medecin();
  listHopitaux : Hopital[] = [];
  constructor(private medecinService : MedecinService , private hopitalService : HopitalService)  { }

  

  ngOnInit(): void {
    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
  }
    )
}
  createMedecin(){
    this.medecinService.create(this.newMedecin).subscribe(
      data => {
          if (data['idMedecin'] == 0) {
  
          }else if (data['idMedecin']) {
  Swal.fire(
    'Medecin ajoutée!',
   this.newMedecin.nomMedecin+ ' a bien été ajouté!',
    'success'
  ).then( () => {
    window.location.href = "http://localhost:4200/medecin"
  })
          }
        }
      
    )
  }
}
