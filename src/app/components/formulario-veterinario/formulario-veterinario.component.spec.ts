import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVeterinario } from './formulario-veterinario.component';

describe('FormularioVeterinarioComponent', () => {
  let component: FormularioVeterinario;
  let fixture: ComponentFixture<FormularioVeterinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVeterinario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVeterinario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
