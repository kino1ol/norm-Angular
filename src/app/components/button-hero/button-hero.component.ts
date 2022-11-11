import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/heroes';

@Component({
  selector: 'app-button-hero',
  templateUrl: './button-hero.component.html',
  styleUrls: ['./button-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonHeroComponent {
  @Input() public hero: Hero = {id: 0, name: 'none'}
}
