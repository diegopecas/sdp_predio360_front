import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsultaPredialComponent } from './components/consulta/consulta-predial/consulta-predial.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { Map3dComponent } from './components/map3d/map3d.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultaDireccionComponent } from './components/consulta/consulta-predial/consulta-direccion/consulta-direccion.component';
import { ConsultaMatriculaComponent } from './components/consulta/consulta-predial/consulta-matricula/consulta-matricula.component';
import { ConsultaChipComponent } from './components/consulta/consulta-predial/consulta-chip/consulta-chip.component';
import { ConsultaCedulaComponent } from './components/consulta/consulta-predial/consulta-cedula/consulta-cedula.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ConsultaSeleccionEspacialComponent } from './components/consulta/consulta-seleccion-espacial/consulta-seleccion-espacial.component';
import { ConsultaUplComponent } from './components/consulta/consulta-upl/consulta-upl.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from './common/interceptors/http.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GaleriaInmobiliariaComponent } from './components/resultados/galeria-inmobiliaria/galeria-inmobiliaria.component';
import { ConsultaGaleriaComponent } from './components/consulta/consulta-galeria/consulta-galeria.component';
import { CrearDireccionComponent } from './components/consulta/consulta-predial/consulta-direccion/crear-direccion/crear-direccion.component';
import { ResultadosPredioComponent } from './components/resultados/resultados-predio/resultados-predio.component';
import { LoadingBarComponent } from './common/utils/loading-bar/loading-bar.component';
import { ResultadosEstadisticasPredioComponent } from './components/resultados/resultados-estadisticas-predio/resultados-estadisticas-predio.component';
import { RenderedSymbols } from './common/symbols/rendered-symbols';
import { CustomDecimalFormatPipe } from './common/pipes/custom-decimal-format.pipe';
import { ResultadosCercanosPredioComponent } from './components/resultados/resultados-cercanos-predio/resultados-cercanos-predio.component';
import { ResultadosUrbanisticoComponent } from './components/resultados/resultados-urbanistico/resultados-urbanistico.component';
import { AgregarCapasComponent } from './components/consulta/agregar-capas/agregar-capas.component';
import { FichaProyectoComponent } from './components/ficha-proyecto/ficha-proyecto.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SearchPipeGeneral } from './common/pipes/search';
import { BuscarComponent } from './common/buscar/buscar.component';
import { AgregarCapasPrecargadasComponent } from './components/consulta/agregar-capas-precargadas/agregar-capas-precargadas.component';
import { PiePaginaComponent } from './common/pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from './common/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultaPredialComponent,
    HomeComponent,
    Map3dComponent,
    ConsultaDireccionComponent,
    ConsultaMatriculaComponent,
    ConsultaChipComponent,
    ConsultaCedulaComponent,
    ResultadosComponent,
    ConsultaComponent,
    ConsultaSeleccionEspacialComponent,
    ConsultaUplComponent,
    GaleriaInmobiliariaComponent,
    ConsultaGaleriaComponent,
    CrearDireccionComponent,
    ResultadosPredioComponent,
    LoadingBarComponent,
    ResultadosEstadisticasPredioComponent,
    CustomDecimalFormatPipe,
    ResultadosCercanosPredioComponent,
    ResultadosUrbanisticoComponent,
    AgregarCapasComponent,
    FichaProyectoComponent,
    BuscarComponent,
    SearchPipeGeneral,
    AgregarCapasPrecargadasComponent,
    PiePaginaComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  exports: [
    SearchPipeGeneral
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    RenderedSymbols
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
