import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCapasPrecargadasComponent } from './agregar-capas-precargadas.component';

describe('AgregarCapasPrecargadasComponent', () => {
  let component: AgregarCapasPrecargadasComponent;
  let fixture: ComponentFixture<AgregarCapasPrecargadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCapasPrecargadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCapasPrecargadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
