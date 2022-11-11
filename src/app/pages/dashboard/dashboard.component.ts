import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HeroService } from "src/app/services/hero.service";
import { Hero } from "src/app/types/heroes";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = []

  
  constructor(
    private heroService: HeroService,
    private ref: ChangeDetectorRef
    ) {}

  public ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
      this.ref.markForCheck()
    })
  }
}
