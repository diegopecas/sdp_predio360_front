import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGaleriaComponent } from './consulta-galeria.component';

describe('ConsultaGaleriaComponent', () => {
  let component: ConsultaGaleriaComponent;
  let fixture: ComponentFixture<ConsultaGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
