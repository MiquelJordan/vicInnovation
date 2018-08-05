import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { EtagesComponent } from './components/etages/etages.component';
import { AppartementsComponent } from './components/appartements/appartements.component';
import { PiecesComponent } from './components/pieces/pieces.component';
import { BatimentsComponent } from './components/batiments/batiments.component';
import { HomeComponent } from './components/home/home.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { RegisterComponent } from './components/register/register.component';


export const appRoutes: Routes = [
    { path: "", redirectTo: "/blank", pathMatch: "full" },
    {
        path: "blank",
        component: BlankLayoutComponent,
        children: [
            { path: "", component: LoginComponent },
            { path: "register", component: RegisterComponent },

        ]
    },

    {
        path: "app",


        component: AppLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },

            {
                path: 'project/:projectId', component: ProjectLayoutComponent, children: [
                    { path: '', component: ProjectComponent },
                    { path: 'etage/:id', component: EtagesComponent },
                    { path: 'appartement/:id', component: AppartementsComponent },
                    { path: 'batiment/:id', component: BatimentsComponent },
                    { path: 'pieces', component: PiecesComponent }

                ]
            }

        ]
    }




]