import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPredioComponent } from './resultados-predio.component';

describe('ResultadosPredioComponent', () => {
  let component: ResultadosPredioComponent;
  let fixture: ComponentFixture<ResultadosPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
