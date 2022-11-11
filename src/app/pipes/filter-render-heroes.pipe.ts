import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../types/heroes';

@Pipe({
  name: 'filterRenderHeroes'
})
export class FilterRenderHeroesPipe implements PipeTransform {
  public transform(heroes: Hero[]): Hero[] {
    return heroes.filter((_, i) => i < 4);
  }
}
