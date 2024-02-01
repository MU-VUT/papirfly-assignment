import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogTabsComponent } from '../dialog-tabs/dialog-tabs.component';
import { DialogInnerComponent } from '../dialog-inner/dialog-inner.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    DialogTabsComponent,
    FormsModule,
    DialogInnerComponent,
    MatIcon,
    HttpClientModule,
  ],
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}
