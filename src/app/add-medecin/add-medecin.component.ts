import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import {HopitalService} from '../services/hopital.service';
import { Hopital } from '../models/hopital';
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
        console.log(data)
      }
    )
  }
}
