import { Component, OnInit } from '@angular/core';

import { MedecinService} from '../services/medecin.service';
import {Medecin} from '../models/medecin'



@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {

  listMedecins : Medecin[]=[];


  constructor( private medecinService : MedecinService) { }

  ngOnInit(): void {
    this.medecinService.getAll().subscribe (
      data => {
        this.listMedecins =data;
      }
    )
  }

  deletMedecin(idMedecin : number){
    this.medecinService.deleteMedecin(idMedecin).subscribe(
      data=> {console.log(data)}
    )
  }

}
