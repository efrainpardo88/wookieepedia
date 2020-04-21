import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ResoursesComponent} from './resourses/resourses.component'


const routes: Routes = [
  {
     path: '', redirectTo: 'home', pathMatch: 'prefix' 
  },
  {
    path: 'home',
    component: HomeComponent,
    //data: { title: 'HOME' },
  },
  {
    path: 'resourses',
    component: ResoursesComponent

  },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
