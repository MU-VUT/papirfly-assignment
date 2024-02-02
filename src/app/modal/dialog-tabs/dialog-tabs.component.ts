import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
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
    MatExpansionModule,
    CommonModule,
  ],
})
export class DialogTabsComponent {
  @Input() settings: Settings;
}
