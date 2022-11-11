import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/heroes';

@Component({
  selector: 'app-row-hero',
  templateUrl: './row-hero.component.html',
  styleUrls: ['./row-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowHeroComponent {
  @Input() public hero!: Hero
}
