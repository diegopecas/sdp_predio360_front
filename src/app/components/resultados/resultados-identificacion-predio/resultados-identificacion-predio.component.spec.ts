import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosIdentificacionPredioComponent } from './resultados-identificacion-predio.component';

describe('ResultadosIdentificacionPredioComponent', () => {
  let component: ResultadosIdentificacionPredioComponent;
  let fixture: ComponentFixture<ResultadosIdentificacionPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosIdentificacionPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosIdentificacionPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
