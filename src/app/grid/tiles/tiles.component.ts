import { Component, OnInit } from '@angular/core';
import { Tile } from '../../types/Tile';
import { TileService } from '../../services/tile.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss',
})
export class TilesComponent implements OnInit {
  tiles: Tile[] = [];

  display: number = 2;
  // 1 => default
  // 2 => custom

  constructor(private tileService: TileService) {}

  ngOnInit(): void {
    this.tileService.getTiles().subscribe((tiles) => (this.tiles = tiles));
  }
}
