import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosNormativaComponent } from './resultados-normativa.component';

describe('ResultadosNormativaComponent', () => {
  let component: ResultadosNormativaComponent;
  let fixture: ComponentFixture<ResultadosNormativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosNormativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosNormativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
