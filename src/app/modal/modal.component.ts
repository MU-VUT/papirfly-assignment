import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  styleUrl: './modal.component.scss',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [MatButtonModule, DialogComponent, MatIconModule],
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  // for debug only
  ngOnInit(): void {
    this.dialog.open(DialogComponent, {
      width: '1100px',
    });
  }
  // delete when not needed

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogComponent, {
      width: '1100px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
