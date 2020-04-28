import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';

import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component';

import { ResoursesComponent } from './resourses/resourses.component'
import { PeopleComponent } from './resourses/people/people.component';
import { PlanetsComponent } from './resourses/planets/planets.component';
import { FilmsComponent } from './resourses/films/films.component';
import { SpeciesComponent } from './resourses/species/species.component';
import { VehiclesComponent } from './resourses/vehicles/vehicles.component';
import { StarshipsComponent } from './resourses/starships/starships.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'prefix'
  },
  {
    path: '',
    component: ViewLayoutComponent,

    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'resourses',
      component: ResoursesComponent,
      children: [
        {
          path: 'people',
          component: PeopleComponent
        },
        {
          path: 'planets',
          component: PlanetsComponent
        },
        {
          path: 'films',
          component: FilmsComponent
        },
        {
          path: 'species',
          component: SpeciesComponent
        },
        {
          path: 'vehicles',
          component: VehiclesComponent
        },
        {
          path: 'starships',
          component: StarshipsComponent
        },
      ]

    },
    {
      path: 'search',
      component: SearchComponent
    }]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
