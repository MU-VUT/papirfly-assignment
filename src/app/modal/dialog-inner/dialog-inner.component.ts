import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragPlaceholder,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

import { DialogInnerItemsComponent } from '../dialog-inner-items/dialog-inner-items.component';

import { Tile } from '../../types/Tile';
import { TileService } from '../../services/tile.service';

@Component({
  selector: 'app-dialog-inner',
  templateUrl: './dialog-inner.component.html',
  styleUrl: './dialog-inner.component.scss',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    CdkDropList,
    CdkDrag,
    DialogInnerItemsComponent,
    CdkDragPlaceholder,
    CdkDragHandle,
  ],
})
export class DialogInnerComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private tileService: TileService) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.tileService.getTiles().subscribe((tiles) => (this.tiles = tiles));
  }
}
