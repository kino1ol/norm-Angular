import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ButtonHeroComponent } from '../components/button-hero/button-hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DashboardComponent } from './heroes.component';
import { RowHeroComponent } from '../components/row-hero/row-hero.component';
import { DetailsHeroComponent } from './pages/details-hero/details-hero.component';
import { FilterRenderHeroesPipe } from './pipes/filter-render-heroes.pipe';


@NgModule({
  declarations: [
    HeroesComponent,
    ButtonHeroComponent,
    DashboardComponent,
    FilterRenderHeroesPipe,
    HeroesComponent,
    RowHeroComponent,
    DetailsHeroComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
