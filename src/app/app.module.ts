import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";
import { ButtonHeroComponent } from './components/button-hero/button-hero.component';
import { FilterRenderHeroesPipe } from './pipes/filter-render-heroes.pipe';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsHeroComponent } from './pages/details-hero/details-hero.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RowHeroComponent } from './components/row-hero/row-hero.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    ButtonHeroComponent,
    FilterRenderHeroesPipe,
    HeroComponent,
    DetailsHeroComponent,
    RowHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
