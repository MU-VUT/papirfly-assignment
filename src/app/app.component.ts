import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SettingsService } from './services/settings.service';
import { TileService } from './services/tile.service';

import { MatIconRegistry } from '@angular/material/icon';

import Settings from './types/Settings';
import Tile from './types/Tile';

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
      viewValue: '3 tiles 33/33/33',
    },
    {
      id: 2,
      value: 'display-2',
      viewValue: '3 tiles 25/25/50',
    },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  settings: Settings = defaultSettings;
  tiles: Tile[];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private settingsService: SettingsService,
    private tileService: TileService
  ) {
    this.matIconRegistry.addSvgIcon(
      `close-btn`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-admin-iconset-cross-small.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `arrange`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-bb-iconset-arrange-down.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `move`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-bb-iconset-move-simple.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `remove`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-bb-iconset-remove.svg'
      )
    );
  }

  onUpdate() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.settingsService
      .getSettings()
      .subscribe((settings) => (this.settings = settings));
    this.tileService
      .getTiles()
      .subscribe(
        (tiles) => (this.tiles = tiles.slice(0, this.settings.tilesVisible))
      );
  }
}
