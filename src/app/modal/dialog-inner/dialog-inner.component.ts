import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragPlaceholder,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

import Tile from '../../types/Tile';

@Component({
  selector: 'app-dialog-inner',
  templateUrl: './dialog-inner.component.html',
  styleUrl: './dialog-inner.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDragHandle,
    FormsModule,
    CommonModule,
  ],
})
export class DialogInnerComponent {
  @Input() tiles: Tile[];
  @Output() onDeletedItems: EventEmitter<Tile> = new EventEmitter();
  @Output() onAddedItems: EventEmitter<Tile> = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  addTile() {
    const newTile: Tile = {
      id: Math.random().toString(16).slice(2).toString(),
      text: '',
      link: '',
      bgColor: '#12355b',
    };
    this.onAddedItems.emit(newTile);
    this.tiles.push(newTile);
  }

  removeTile(tile: Tile) {
    this.onDeletedItems.emit(tile);
    this.tiles = this.tiles.filter((e) => e.id !== tile.id);
  }
}
