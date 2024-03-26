import { Routes } from '@angular/router';
import path from 'path';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';

export const routes: Routes = [
    {path: "alunos", component: TabelaAlunosComponent},
    {path: "", redirectTo: "alunos", pathMatch: "full"},
];

