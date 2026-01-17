package com.example.biblioteca_api.service;

import com.example.biblioteca_api.entity.Livro;
import com.example.biblioteca_api.repository.LivroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository repository;

    public LivroService(LivroRepository repository) {
        this.repository = repository;
    }

    public List<Livro> listarTodos() {
        return repository.findAll();
    }

    public Livro salvar(Livro livro) {
        return repository.save(livro);
    }

    public Livro atualizar(Long id, Livro livro) {
        Livro existente = repository.findById(id).orElseThrow();
        existente.setTitulo(livro.getTitulo());
        existente.setAutor(livro.getAutor());
        existente.setAnoPublicacao(livro.getAnoPublicacao());
        existente.setIsbn(livro.getIsbn());
        return repository.save(existente);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

}
