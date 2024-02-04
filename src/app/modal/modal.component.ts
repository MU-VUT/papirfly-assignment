import { Component, EventEmitter, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [MatButtonModule, DialogComponent, MatIconModule],
})
export class ModalComponent {
  @Output() updatedChild = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.afterAllClosed.subscribe(() => {
      this.updatedChild.emit();
    });
    this.dialog.open(DialogComponent, {
      width: '1100px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
