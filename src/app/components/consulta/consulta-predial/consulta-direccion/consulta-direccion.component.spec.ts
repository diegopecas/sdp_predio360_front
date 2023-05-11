import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDireccionComponent } from './consulta-direccion.component';

describe('ConsultaDireccionComponent', () => {
  let component: ConsultaDireccionComponent;
  let fixture: ComponentFixture<ConsultaDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDireccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
