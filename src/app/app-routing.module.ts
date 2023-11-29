import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Map3dComponent } from './components/map3d/map3d.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: '3d', component: Map3dComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
