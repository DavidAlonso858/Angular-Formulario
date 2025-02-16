import { Routes } from '@angular/router';
import { FormularioVeterinario } from './components/formulario-veterinario/formulario-veterinario.component';
import { EventListComponent } from './components/lista-veterinario/lista-veterinario.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component'
import { FormularioEmpleadoComponent } from './formulario-empleado/formulario-empleado.component';

export const routes: Routes = [
  { path: '', component: PresentacionComponent },
  { path: 'events', component: EventListComponent },
  { path: 'formu', component: FormularioVeterinario },
  { path: 'formuEmpleado', component: FormularioEmpleadoComponent }
];
