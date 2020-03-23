import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//on fait un import 
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component'
import { ListMedecinsComponent} from './list-medecins/list-medecins.component'
import { ListPatientsComponent } from './list-patients/list-patients.component'
import {AjoutehopitalComponent}  from './ajoutehopital/ajoutehopital.component'
import {AddMedecinComponent} from './add-medecin/add-medecin.component'
import {AddPatientComponent} from './add-patient/add-patient.component'
import {UpdateHopitalComponent} from './update-hopital/update-hopital.component'
import { UpdateMedecinComponent} from './update-medecin/update-medecin.component'
import {UpdatePatientComponent}  from './update-patient/update-patient.component'


//on decide des routes, ici hopital, liée a route list-hopitaux component
const routes: Routes = [
  {
    path :"hopital",
    component : ListHopitauxComponent
  },
  {
    path:"medecin",
    component : ListMedecinsComponent
  },
  {
  path:"patient",
  component : ListPatientsComponent
  },
  {
    path:"addhopital",
    component : AjoutehopitalComponent
  },
  {
    path: "addmedecin",
    component : AddMedecinComponent
  },
  {
    path:"addpatient",
    component: AddPatientComponent
  },
  {
    path:"updatehopital/:idHopital",
    component: UpdateHopitalComponent
  },
  {
    path:"updatemedecin/:idMedecin",
    component: UpdateMedecinComponent
  },
  {
    path:"updatepatient/:idPatient",
    component: UpdatePatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
