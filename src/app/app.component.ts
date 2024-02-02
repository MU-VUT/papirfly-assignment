import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import Settings from './types/Settings';
import { SettingsService } from './services/settings.service';
import { TileService } from './services/tile.service';
import { Tile } from './types/Tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  settings: Settings;
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
