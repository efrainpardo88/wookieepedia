import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MainBackgroundComponent } from './shared/layout/main-background/main-background.component';
import { SocialNetworkComponent } from './shared/layout/social-network/social-network.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ResourceComponent } from './shared/resource/resource.component';
import { LoadingComponent } from './shared/loading/loading.component';

import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeCategoriesComponent } from './home/home-categories/home-categories.component';
import { HomeInAGalaxyComponent } from './home/home-in-a-galaxy/home-in-a-galaxy.component';
import { HomeMoviesComponent } from './home/home-movies/home-movies.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';

import { ResourcesComponent } from './resources/resources.component';
import { PeopleComponent } from './resources/people/people.component';
import { PlanetsComponent } from './resources/planets/planets.component';
import { FilmsComponent } from './resources/films/films.component';
import { SpeciesComponent } from './resources/species/species.component';
import { VehiclesComponent } from './resources/vehicles/vehicles.component';
import { StarshipsComponent } from './resources/starships/starships.component';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainBackgroundComponent,
    SocialNetworkComponent,
    ResourcesComponent,
    SearchComponent,
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    HomeHeaderComponent,
    HomeCategoriesComponent,
    HomeInAGalaxyComponent,
    HomeMoviesComponent,
    HomeAboutUsComponent,
    ResourceComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
