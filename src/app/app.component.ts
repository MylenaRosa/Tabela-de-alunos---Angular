import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabelaAlunosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
