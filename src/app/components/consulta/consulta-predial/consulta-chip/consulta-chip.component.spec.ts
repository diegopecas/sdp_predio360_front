import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaChipComponent } from './consulta-chip.component';

describe('ConsultaChipComponent', () => {
  let component: ConsultaChipComponent;
  let fixture: ComponentFixture<ConsultaChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
