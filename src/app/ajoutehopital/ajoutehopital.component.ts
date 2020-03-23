import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';


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
  createHopital(){
    this.hopitalService.postHopital(this.newHopital).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
