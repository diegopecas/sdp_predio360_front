import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPredialComponent } from './components/consulta/consulta-predial/consulta-predial.component';
import { HomeComponent } from './components/home/home.component';
import { Map2dComponent } from './components/map2d/map2d.component';
import { Map3dComponent } from './components/map3d/map3d.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: '2d', component: Map2dComponent},
  { path: '3d', component: Map3dComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
