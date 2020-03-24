import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import { ActivatedRoute } from '@angular/router';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../services/hopital.service';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
// on import le service coresspondant et le model
@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
// on crée des objets qu'on va par la suite apellé
export class UpdateMedecinComponent implements OnInit {
  medecin : Medecin = new Medecin();
idMedecin : number;
listHopitaux : Hopital[] = [];

//le constructeur on met en privé, le activated route nous permet de faire des routes et d'utiliser les routes, ici par exemple il va prendre la valeur de l'id dans le module route "idMedecin"
  constructor(private medecinService : MedecinService , private route: ActivatedRoute, private hopitalService : HopitalService) {

    this.medecin.idMedecin =parseInt (this.route.snapshot.paramMap.get('idMedecin'));
    
   }


  // methode Post update
upMedecin (idMedecin : number , medecin: Medecin) {
  this.medecinService.updateMedecin(idMedecin, medecin).subscribe(
    data=> {
      if (data['idMedecin'] == 0){
    }
    else if (data['idMedecin']){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: this.medecin.nomMedecin +' : medecin modifié',
        showConfirmButton: false,
        timer: 1500
      }).then ( () => {
        window.location.href ="http://localhost:4200/medecin"
      }
      )
    }
    }
  )
}











// methode pour comparer, ici on compare deux objets de type Hopital
compareFn(c1: Hopital, c2: Hopital): boolean {
  return c1 && c2 ? c1.idHopital === c2.idHopital : c1 === c2;
}

// pour la methode Update besoin de recupérer l'id afin de renvoyer la modification
ngOnInit(): void {

  this.medecinService.getbyId(this.medecin.idMedecin).subscribe(
    data=>{
      this.medecin=data;
    }
  )


  //Permet d'avoir accés à la liste des Hopitaux afin de pouvoir modifié l'hopital associé
  this.hopitalService.getAll().subscribe(
    data => {
      this.listHopitaux = data;
}
  )
  }
  

}

