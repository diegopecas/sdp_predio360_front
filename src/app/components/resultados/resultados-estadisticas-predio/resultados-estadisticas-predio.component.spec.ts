import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEstadisticasPredioComponent } from './resultados-estadisticas-predio.component';

describe('ResultadosEstadisticasPredioComponent', () => {
  let component: ResultadosEstadisticasPredioComponent;
  let fixture: ComponentFixture<ResultadosEstadisticasPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosEstadisticasPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosEstadisticasPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
