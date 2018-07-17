import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabinetListComponent } from './projects/cabinet/cabinet-list/cabinet-list.component';
import { CabinetListDetailComponent } from './projects/cabinet/cabinet-list/cabinet-list-detail/cabinet-list-detail.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    CabinetListComponent,
    CabinetListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
