import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosUrbanisticoComponent } from './resultados-urbanistico.component';

describe('ResultadosUrbanisticoComponent', () => {
  let component: ResultadosUrbanisticoComponent;
  let fixture: ComponentFixture<ResultadosUrbanisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosUrbanisticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosUrbanisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
