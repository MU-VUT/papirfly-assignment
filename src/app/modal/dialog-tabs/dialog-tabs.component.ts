import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import Display from '../../types/Display';
import { CommonModule } from '@angular/common';

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
  ],
})
export class DialogTabsComponent {
  selectedValue: string = 'display-1';

  loadAllChecked: boolean;

  displays: Display[] = [
    { value: 'display-1', viewValue: 'Display default', selected: true },
    { value: 'display-2', viewValue: 'Display custom', selected: false },
  ];
}
