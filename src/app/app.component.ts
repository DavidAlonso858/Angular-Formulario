import { Component } from '@angular/core';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PresentacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Formulario';
}
