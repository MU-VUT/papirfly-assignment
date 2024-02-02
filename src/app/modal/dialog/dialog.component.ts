import { Component, OnInit } from '@angular/core';
import {
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
import Settings from '../../types/Settings';
import { SettingsService } from '../../services/settings.service';

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
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private settingsService: SettingsService
  ) {}
  submitted: boolean = false;
  settings: Settings;

  onSubmit() {
    this.submitted = true;
    this.settingsService.updateSettings(this.settings).subscribe();
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.settingsService
      .getSettings()
      .subscribe((settings) => (this.settings = settings));
  }
}
