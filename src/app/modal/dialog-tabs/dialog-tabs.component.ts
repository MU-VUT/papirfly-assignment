import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import Display from '../../types/Display';

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
  ],
})
export class DialogTabsComponent {
  selectedValue: string = 'display-1';

  displays: Display[] = [
    { value: 'display-1', viewValue: 'Display default', selected: true },
    { value: 'display-2', viewValue: 'Display custom', selected: false },
  ];
}
