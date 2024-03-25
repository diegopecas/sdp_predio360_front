import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProyectoComponent } from './ficha-proyecto.component';

describe('FichaProyectoComponent', () => {
  let component: FichaProyectoComponent;
  let fixture: ComponentFixture<FichaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
