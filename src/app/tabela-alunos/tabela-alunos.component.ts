import { Component, Input, OnInit } from '@angular/core';
import path from 'path';
import { combineLatest } from 'rxjs';
import { transferableAbortSignal } from 'util';
import { AppComponent } from '../app.component';
import { FormsModule, NgModel } from '@angular/forms';
import { threadId } from 'worker_threads';
import { IAluno, alunos } from '../alunos';
import { AlunosService } from '../alunos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabela-alunos',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './tabela-alunos.component.html',
  styleUrl: './tabela-alunos.component.css'
})
export class TabelaAlunosComponent implements OnInit {
  nome = "";
  nota1 = 0; 
  nota2 = 0;
  media = 0;
  situacao = "";
  alunos = alunos;

  constructor(
    private alunosService: AlunosService
  ){}

  ngOnInit(): void {
    this.alunos = this.alunosService.obterAlunos();
  }

  cadastrarAlunos() {
    this.media = (this.nota1 + this.nota2) / 2;
    this.situacaoAluno();

    const aluno: IAluno = {
      nome: this.nome,
      nota1: this.nota1,
      nota2: this.nota2,
      media: this.media,
      situacao: this.situacao
    }

    this.alunosService.incluirAluno(aluno)
  }

  situacaoAluno() {
    if (this.media >= 7) { 
      this.situacao = "Aprovado!"
    } else if (this.media < 5) {
      this.situacao = "Reprovado!"
    } else {
      this.situacao = "Recuperação!"
    }
  }

  limparTabela() {
    this.alunosService.limparTabela();
  }

}
