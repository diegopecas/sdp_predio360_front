import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsultaPredialComponent } from './components/consulta/consulta-predial/consulta-predial.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { Map2dComponent } from './components/map2d/map2d.component';
import { Map3dComponent } from './components/map3d/map3d.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultaDireccionComponent } from './components/consulta/consulta-predial/consulta-direccion/consulta-direccion.component';
import { ConsultaMatriculaComponent } from './components/consulta/consulta-predial/consulta-matricula/consulta-matricula.component';
import { ConsultaChipComponent } from './components/consulta/consulta-predial/consulta-chip/consulta-chip.component';
import { ConsultaCedulaComponent } from './components/consulta/consulta-predial/consulta-cedula/consulta-cedula.component';
import { ResultadosComponent } from './components/consulta/consulta-predial/resultados/resultados.component';
import { ResultadosIdentificacionPredioComponent } from './components/consulta/consulta-predial/resultados/resultados-identificacion-predio/resultados-identificacion-predio.component';
import { ResultadosInfoFisicaLoteComponent } from './components/consulta/consulta-predial/resultados/resultados-info-fisica-lote/resultados-info-fisica-lote.component';
import { ResultadosLocalizacionComponent } from './components/consulta/consulta-predial/resultados/resultados-localizacion/resultados-localizacion.component';
import { ResultadosNormativaComponent } from './components/consulta/consulta-predial/resultados/resultados-normativa/resultados-normativa.component';
import { ResultadosInfoEconomicaComponent } from './components/consulta/consulta-predial/resultados/resultados-info-economica/resultados-info-economica.component';
import { ResultadosUrbanisticaComponent } from './components/consulta/consulta-predial/resultados/resultados-urbanistica/resultados-urbanistica.component';
import { ResultadosEstadisticasComponent } from './components/consulta/consulta-predial/resultados/resultados-estadisticas/resultados-estadisticas.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ConsultaSeleccionEspacialComponent } from './components/consulta/consulta-seleccion-espacial/consulta-seleccion-espacial.component';
import { ConsultaUplComponent } from './components/consulta/consulta-upl/consulta-upl.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    ConsultaPredialComponent,
    ToolbarComponent,
    HomeComponent,
    Map2dComponent,
    Map3dComponent,
    ConsultaDireccionComponent,
    ConsultaMatriculaComponent,
    ConsultaChipComponent,
    ConsultaCedulaComponent,
    ResultadosComponent,
    ResultadosIdentificacionPredioComponent,
    ResultadosInfoFisicaLoteComponent,
    ResultadosLocalizacionComponent,
    ResultadosNormativaComponent,
    ResultadosInfoEconomicaComponent,
    ResultadosUrbanisticaComponent,
    ResultadosEstadisticasComponent,
    ConsultaComponent,
    ConsultaSeleccionEspacialComponent,
    ConsultaUplComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
