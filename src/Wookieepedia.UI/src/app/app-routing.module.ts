import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {ResoursesComponent} from './resourses/resourses.component'
import { AppComponent } from './app.component';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';
import { MoviesComponent } from './movies/movies.component';

import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {
     path: '', redirectTo: 'home', pathMatch: 'prefix' 
  },
  
  {
    path: '',
    component: ViewLayoutComponent,
    
    children: [{
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'resourses',
      component: ResoursesComponent
  
    },
    {
      path: 'movies',
      component: MoviesComponent
  
    },
    ]
    //data: { title: 'HOME' },
  },
  {
   path: 'search',
   component: SearchComponent,
   data: { title: 'search' }

  },
  { path: '**', redirectTo: 'home'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
