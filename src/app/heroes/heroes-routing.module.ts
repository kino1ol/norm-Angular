import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHeroComponent } from './pages/details-hero/details-hero.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DashboardComponent } from './heroes.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "her", component: HeroesComponent },
  { path: "details/:id", component: DetailsHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
