import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TilesComponent } from './grid/tiles/tiles.component';
import { TilesItemComponent } from './grid/tiles-item/tiles-item.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TilesComponent, TilesItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
