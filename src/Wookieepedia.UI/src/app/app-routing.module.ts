import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ResoursesComponent} from './resourses/resourses.component'
import { AppComponent } from './app.component';
import { ViewLayoutComponent } from './shared/layout/view-layout/view-layout.component';
import { MoviesComponent } from './movies/movies.component';


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
  
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
