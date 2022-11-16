import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard-service.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: !!localStorage.getItem('token') ? "heroes" : "sing", // $-)
    pathMatch: 'full',
  },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), canActivate: [AuthGuardService], },
  { path: 'sing', loadChildren: () => import('./sing/sing.module').then(m => m.SingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
