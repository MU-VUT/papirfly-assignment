import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Tile } from '../../types/Tile';
import {
  CdkDragPlaceholder,
  CdkDrag,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dialog-inner-items',
  standalone: true,
  imports: [
    MatIcon,
    CdkDragHandle,
    CdkDrag,
    CdkDragPlaceholder,
    MatButtonModule,
  ],
  templateUrl: './dialog-inner-items.component.html',
  styleUrl: './dialog-inner-items.component.scss',
})
export class DialogInnerItemsComponent {
  @Input() tile: Tile;
}
