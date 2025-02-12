import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoSeleccionadoComponent } from './empleado-seleccionado.component';

describe('EmpleadoSeleccionadoComponent', () => {
  let component: EmpleadoSeleccionadoComponent;
  let fixture: ComponentFixture<EmpleadoSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoSeleccionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
