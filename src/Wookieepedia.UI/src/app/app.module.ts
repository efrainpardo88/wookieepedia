import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MainContentComponent } from './shared/layout/main-content/main-content.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLayoutComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
