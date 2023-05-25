import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaInmobiliariaComponent } from './galeria-inmobiliaria.component';

describe('GaleriaInmobiliariaComponent', () => {
  let component: GaleriaInmobiliariaComponent;
  let fixture: ComponentFixture<GaleriaInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaInmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
