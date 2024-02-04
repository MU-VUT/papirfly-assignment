import { Component, Input } from '@angular/core';

import Settings from '../../types/Settings';
import Tile from '../../types/Tile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss',
})
export class TilesComponent {
  @Input() settings: Settings;
  @Input() tiles: Tile[];
}
