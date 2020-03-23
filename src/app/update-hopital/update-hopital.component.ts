import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../services/hopital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-hopital',
  templateUrl: './update-hopital.component.html',
  styleUrls: ['./update-hopital.component.css']
})
export class UpdateHopitalComponent implements OnInit {

  
  hopital : Hopital = new Hopital();
idHopitalUrl : number;
  constructor(private hopitalService : HopitalService , private route: ActivatedRoute) {

    this.hopital.idHopital =parseInt (this.route.snapshot.paramMap.get('idHopital'));
    
   }


  
upHopital (idHopital : number , hopital: Hopital) {
  this.hopitalService.updateHopital(idHopital, hopital).subscribe(
    data=> {
      console.log(data)
    }
  )
}
ngOnInit(): void {
  this.hopitalService.getbyId(this.hopital.idHopital).subscribe(
    data=>{
      this.hopital=data;
    }
  )
  }
    


  }
