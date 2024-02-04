import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import Settings from '../../types/Settings';

@Component({
  selector: 'app-dialog-tabs',
  templateUrl: './dialog-tabs.component.html',
  styleUrl: './dialog-tabs.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatButtonModule,
    CommonModule,
    MatIcon,
    MatDialogClose,
    MatDialogActions,
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DialogTabsComponent {
  @Input() settings: Settings;
  @Input() form: NgForm;
}
