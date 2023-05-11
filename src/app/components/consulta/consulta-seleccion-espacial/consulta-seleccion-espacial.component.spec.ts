import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSeleccionEspacialComponent } from './consulta-seleccion-espacial.component';

describe('ConsultaSeleccionEspacialComponent', () => {
  let component: ConsultaSeleccionEspacialComponent;
  let fixture: ComponentFixture<ConsultaSeleccionEspacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSeleccionEspacialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSeleccionEspacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
