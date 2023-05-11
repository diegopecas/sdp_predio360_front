import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInfoFisicaLoteComponent } from './resultados-info-fisica-lote.component';

describe('ResultadosInfoFisicaLoteComponent', () => {
  let component: ResultadosInfoFisicaLoteComponent;
  let fixture: ComponentFixture<ResultadosInfoFisicaLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosInfoFisicaLoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosInfoFisicaLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
