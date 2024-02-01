import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Extra text';
  subtitle = 'Get Inspired';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
}
