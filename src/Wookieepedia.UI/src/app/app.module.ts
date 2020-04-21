import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainBackgroundComponent } from './shared/layout/main-background/main-background.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialNetworkComponent } from './shared/layout/social-network/social-network.component';
import { ResoursesComponent } from './resourses/resourses.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainBackgroundComponent,
    SocialNetworkComponent,
    ResoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
