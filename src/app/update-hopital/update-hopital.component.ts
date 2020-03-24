import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../services/hopital.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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
    data => {
      if (data['idHopital'] == 0) {

      }else if (data['idHopital']) { 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: this.hopital.nomHopital+ ' Hopital modifié',
          showConfirmButton: false,
          timer: 1500
        }).then( () => {
          window.location.href = "http://localhost:4200/hopital"
      }
    
  )
    }
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
