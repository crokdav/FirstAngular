import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';
import Swal from 'sweetalert2'


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
        Swal.fire({
          title: 'Etes-vous-sûr de vouloir supprimer?',
          text: "Pas de retour en arrière possible",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'le supprimer'
        }).then((result) => {
          
          if (result.value) {
            this.hopitalService.deleteHopital(idHopital).subscribe(
              data => {

            Swal.fire(
              'Supprimer!',
              'Votre choix a bien été supprimer.',
              'success'
            )
            window.location.href = "http://localhost:4200/hopital"
          }
        )}
        
        }
    )
      }
      


      
  }

