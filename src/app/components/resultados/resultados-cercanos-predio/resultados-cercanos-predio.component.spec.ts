import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCercanosPredioComponent } from './resultados-cercanos-predio.component';

describe('ResultadosCercanosPredioComponent', () => {
  let component: ResultadosCercanosPredioComponent;
  let fixture: ComponentFixture<ResultadosCercanosPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosCercanosPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosCercanosPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
