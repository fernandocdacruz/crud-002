import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080/api/livros'

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  salvar(livro: Livro) {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  atualizar(id: number, livro:Livro) {
    return this.http.put<Livro>(`${this.apiUrl}/${id}`, livro);
  }

  deletar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
