import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute } from '@angular/router';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../services/hopital.service';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  medecin : Medecin = new Medecin();
idMedecinUrl : number;
listHopitaux : Hopital[] = [];
  constructor(private medecinService : MedecinService , private route: ActivatedRoute, private hopitalService : HopitalService) {

    this.medecin.idMedecin =parseInt (this.route.snapshot.paramMap.get('idMedecin'));
    
   }


  
upMedecin (idMedecin : number , medecin: Medecin) {
  this.medecinService.updateMedecin(idMedecin, medecin).subscribe(
    data=> {
      console.log(data)
    }
  )
}
ngOnInit(): void {
  this.medecinService.getbyId(this.medecin.idMedecin).subscribe(
    data=>{
      this.medecin=data;
    }
  )
  this.hopitalService.getAll().subscribe(
    data => {
      this.listHopitaux = data;
}
  )
  }
  

}
