import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../types/Tile';

@Component({
  selector: 'app-tiles-item',
  templateUrl: './tiles-item.component.html',
  styleUrl: './tiles-item.component.scss',
})
export class TilesItemComponent implements OnInit {
  @Input() tile: Tile;
  tileLink: string;

  ngOnInit(): void {
    this.tileLink = this.tile.link.includes('https://')
      ? this.tile.link
      : `https://${this.tile.link}`;
  }
}
