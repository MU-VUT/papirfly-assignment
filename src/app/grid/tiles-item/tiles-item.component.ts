import { Component, Input } from '@angular/core';
import { Tile } from '../../types/Tile';

@Component({
  selector: 'app-tiles-item',
  templateUrl: './tiles-item.component.html',
  styleUrl: './tiles-item.component.scss',
})
export class TilesItemComponent {
  @Input() tile: Tile;

  openLink() {
    window.open(this.tile.link, '_blank');
  }
}
