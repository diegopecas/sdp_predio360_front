import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUplComponent } from './consulta-upl.component';

describe('ConsultaUplComponent', () => {
  let component: ConsultaUplComponent;
  let fixture: ComponentFixture<ConsultaUplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaUplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaUplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
