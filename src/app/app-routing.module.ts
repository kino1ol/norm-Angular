import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./auth/authService.service";


const routes: Routes = [
  {
    path: "",
    redirectTo: !!localStorage.getItem('token') ? "heroes" : "sign", // $-)
    pathMatch: 'full',
  },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), canActivate: [AuthService], },
  { path: 'sign', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
