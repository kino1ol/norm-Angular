import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/heroes';

@Component({
  selector: 'app-details-hero',
  templateUrl: './details-hero.component.html',
  styleUrls: ['./details-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsHeroComponent implements OnInit, OnDestroy {

  public hero: Hero = {} as Hero

  public name = new FormControl<string>('')

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroService,
    private ref: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log('ngOnIniti', id);
      this.heroesService.getHero(id).subscribe(hero => {
        this.hero = hero
        this.name.setValue(hero.name);
        this.ref.markForCheck()
      });
    });
  }

  public ngOnDestroy(): void {
    this.heroesService.updateHero({...this.hero, name: this.name.value as string}).subscribe(a => console.log(a))
  }
}
