import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { BatimentsComponent } from './components/batiments/batiments.component';
import { EtagesComponent } from './components/etages/etages.component';
import { AppartementsComponent } from './components/appartements/appartements.component';
import { PiecesComponent } from './components/pieces/pieces.component';
import { appRoutes } from './app.routes';
import { MaterialModule } from './modules/material.modules';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShareDataService } from './services/data/shareDate.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/projectService/project.service';
import { ConstructionService } from './services/constructionService/construction.service';
import { BatimentService } from './services/batimentService/batiment.service';
import { AppartementService } from './services/appartementService/appartement.service';
import { PieceService } from './services/pieceService/pieces.service';
import { DialogueComponent } from './services/shareService/dialogue/dialogue.component';
import { CorpsDeMetierComponent } from './components/corps-de-metier/corps-de-metier.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BatimentsComponent,
    EtagesComponent,
    AppartementsComponent,
    PiecesComponent,
    HomeComponent,
    DialogueComponent,
    CorpsDeMetierComponent,
    AppLayoutComponent,
    BlankLayoutComponent,
    LoginComponent,
    ProjectLayoutComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

  ],
  providers: [
    ShareDataService,
    ProjectService,
    ConstructionService,
    BatimentService,
    AppartementService,
    PieceService
  ],
  entryComponents: [DialogueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
