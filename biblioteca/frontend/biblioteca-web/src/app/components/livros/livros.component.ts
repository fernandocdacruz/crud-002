import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livros',
  standalone: true,                 // ✅ OBRIGATÓRIO
  imports: [CommonModule, FormsModule], // ✅ ngFor + ngModel
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];

  livro: Livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    isbn: ''
  };

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.livroService.listar().subscribe(dados => {
      this.livros = dados;
    });
  }

  salvar() {
    this.livroService.salvar(this.livro).subscribe(() => {
      this.livro = { titulo: '', autor: '', anoPublicacao: 0, isbn: '' };
      this.carregarLivros();
    });
  }

  deletar(id: number) {
    this.livroService.deletar(id).subscribe(() => {
      this.carregarLivros();
    });
  }
}

