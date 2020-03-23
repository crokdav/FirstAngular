import { Component, OnInit } from '@angular/core';

import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';



@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})
export class ListHopitauxComponent implements OnInit {

  listHopitaux : Hopital[] = [];
  

  constructor(private hopitalService : HopitalService ) { }

  ngOnInit(): void {
    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )


  }
  deletHopital(idHopital : number){
    this.hopitalService.deleteHopital(idHopital).subscribe(
      data=> {console.log(data)}
      )
  }
}
