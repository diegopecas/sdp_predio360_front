import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPredialComponent } from './consulta-predial.component';

describe('ConsultaPredialComponent', () => {
  let component: ConsultaPredialComponent;
  let fixture: ComponentFixture<ConsultaPredialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPredialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
