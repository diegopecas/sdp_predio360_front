import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosUrbanisticaComponent } from './resultados-urbanistica.component';

describe('ResultadosUrbanisticaComponent', () => {
  let component: ResultadosUrbanisticaComponent;
  let fixture: ComponentFixture<ResultadosUrbanisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosUrbanisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosUrbanisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
