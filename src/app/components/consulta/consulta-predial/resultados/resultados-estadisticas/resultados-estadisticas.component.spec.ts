import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEstadisticasComponent } from './resultados-estadisticas.component';

describe('ResultadosEstadisticasComponent', () => {
  let component: ResultadosEstadisticasComponent;
  let fixture: ComponentFixture<ResultadosEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosEstadisticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
