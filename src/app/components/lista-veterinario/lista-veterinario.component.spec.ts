import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeterinario } from './lista-veterinario.component';

describe('ListaVeterinarioComponent', () => {
  let component: ListaVeterinario;
  let fixture: ComponentFixture<ListaVeterinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVeterinario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVeterinario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
