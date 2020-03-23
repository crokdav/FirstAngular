import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule}  from '@angular/forms'
import {RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component';
import { ListMedecinsComponent } from './list-medecins/list-medecins.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AjoutehopitalComponent } from './ajoutehopital/ajoutehopital.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdateHopitalComponent } from './update-hopital/update-hopital.component';
import { HeaderComponent } from './header/header.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHopitauxComponent,
    ListMedecinsComponent,
    ListPatientsComponent,
    AjoutehopitalComponent,
    AddMedecinComponent,
    AddPatientComponent,
    UpdateHopitalComponent,
    HeaderComponent,
    UpdateMedecinComponent,
    UpdatePatientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
