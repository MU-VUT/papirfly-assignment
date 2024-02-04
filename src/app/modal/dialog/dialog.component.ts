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
import { TileService } from '../../services/tile.service';
import { Tile } from '../../types/Tile';

const defaultSettings: Settings = {
  title: 'extra text',
  subtitle: 'Get Inspired',
  otherLoadAll: true,
  tilesVisible: 18,
  selectedDisplay: 'display-1',
  displays: [
    {
      id: 1,
      value: 'display-1',
      viewValue: 'Display default',
    },
    {
      id: 2,
      value: 'display-2',
      viewValue: 'Display custom',
    },
  ],
};

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
    private settingsService: SettingsService,
    private tilesService: TileService
  ) {}
  submitted: boolean = false;
  settings: Settings = defaultSettings;
  tiles: Tile[] = [];

  deletedItems: Tile[] = [];
  addedItems: Tile[] = [];

  deleteItems(tile: Tile) {
    this.deletedItems.push(tile);
  }

  addItems(tile: Tile) {
    this.addedItems.push(tile);
  }

  onSubmit() {
    this.submitted = true;
    this.settingsService.updateSettings(this.settings).subscribe();

    // Updating all tiles, one tile at a time (multiple requests)
    // Not ideal, because JSON-sever dont have PUT on array of objects
    // On real backend, this would be much easier with POST/PUT array
    for (const addedTile of this.addedItems) {
      this.tilesService.addTile(addedTile).subscribe();
    }

    for (const tile of this.tiles) {
      this.tilesService.updateTile(tile).subscribe();
    }

    for (const deletedTile of this.deletedItems) {
      this.tilesService.deleteTile(deletedTile).subscribe();
    }

    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.settingsService
      .getSettings()
      .subscribe((settings) => (this.settings = settings));
    this.tilesService.getTiles().subscribe((tiles) => {
      this.tiles = tiles;
    });
  }
}
