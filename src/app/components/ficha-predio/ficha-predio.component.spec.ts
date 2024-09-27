import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPredioComponent } from './ficha-predio.component';

describe('FichaProyectoComponent', () => {
  let component: FichaPredioComponent;
  let fixture: ComponentFixture<FichaPredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPredioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
