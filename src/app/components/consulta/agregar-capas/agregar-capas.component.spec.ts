import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCapasComponent } from './agregar-capas.component';

describe('AgregarCapasComponent', () => {
  let component: AgregarCapasComponent;
  let fixture: ComponentFixture<AgregarCapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCapasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
