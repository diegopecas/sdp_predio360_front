import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosInfoEconomicaComponent } from './resultados-info-economica.component';

describe('ResultadosInfoEconomicaComponent', () => {
  let component: ResultadosInfoEconomicaComponent;
  let fixture: ComponentFixture<ResultadosInfoEconomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosInfoEconomicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosInfoEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
