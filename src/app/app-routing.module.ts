import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentifiedComponent } from './authentified/authentified.component';
import {authGuard} from "./auth/auth.guard";

// AUTH GUARD
const routes: Routes = [{
  path: "authentified",
  component: AuthentifiedComponent,
  canActivate: [authGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
