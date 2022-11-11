import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard-service.service";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DetailsHeroComponent } from "./pages/details-hero/details-hero.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: localStorage.getItem('token') === 'token' ? "main" : "sing-up", // $-)
    pathMatch: 'full',
  },
  {
    path: "main",
    canActivate: [AuthGuardService],
    children: [
      { path: "", component: DashboardComponent },
      { path: "her", component: HeroesComponent },
      { path: "details/:id", component: DetailsHeroComponent },
    ],
  },
  { path: 'sing-in', loadChildren: () => import('./sing-in/sing-in.module').then(m => m.SingInModule) },
  { path: 'sing-up', loadChildren: () => import('./sing-up/sing-up.module').then(m => m.SingUpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
