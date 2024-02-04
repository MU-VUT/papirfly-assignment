import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import Settings from '../../types/Settings';
import { MatIcon } from '@angular/material/icon';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';

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
    MatExpansionModule,
    CommonModule,
    MatIcon,
    MatDialogClose,
    MatDialogActions,
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DialogTabsComponent {
  @Input() settings: Settings;
  @Input() form: any;
}
