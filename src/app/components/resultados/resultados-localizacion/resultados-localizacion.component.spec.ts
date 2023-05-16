import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosLocalizacionComponent } from './resultados-localizacion.component';

describe('ResultadosLocalizacionComponent', () => {
  let component: ResultadosLocalizacionComponent;
  let fixture: ComponentFixture<ResultadosLocalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosLocalizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
