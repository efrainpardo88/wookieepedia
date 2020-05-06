import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';

import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component';

import { ResourcesComponent } from './resources/resources.component'
import { PeopleComponent } from './resources/people/people.component';
import { PlanetsComponent } from './resources/planets/planets.component';
import { FilmsComponent } from './resources/films/films.component';
import { SpeciesComponent } from './resources/species/species.component';
import { VehiclesComponent } from './resources/vehicles/vehicles.component';
import { StarshipsComponent } from './resources/starships/starships.component';


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
      path: 'resources',
      component: ResourcesComponent,
      children: [
        {
          path: 'people/:id',
          component: PeopleComponent
        },
        {
          path: 'planets/:id',
          component: PlanetsComponent
        },
        {
          path: 'films/:id',
          component: FilmsComponent
        },
        {
          path: 'species/:id',
          component: SpeciesComponent
        },
        {
          path: 'vehicles/:id',
          component: VehiclesComponent
        },
        {
          path: 'starships/:id',
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
