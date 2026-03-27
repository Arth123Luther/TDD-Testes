import { describe, it, expect, beforeEach } from 'vitest';
import {
  remover,
} from '../src/tarefario.js';

describe("Exercício 1: Remoção", () => {
    
    it('A) Remove tarefa correta por ID', () => {
        expect().toBe()
    });

    it('B) Mantém outras tarefas não selecionadas intactas', () => {
        expect().toBe()
    });

    it('C) Retorna um novo array', () => {
        expect().toBe()
    });

    it('D) Retorna lista completa quando ID é inexistente', () => {
        expect().toBe()
    });

    it('E) Retorna array vazio quando lista é vazia', () => {
        expect().toBe()
    });
})

/* Apagar para commits separados */

/* describe("Exercício 2: Filtro", () =>{

    it('A) Filtro [all] retorna todas as tarefas', () => {
        expect().toBe()
    });

    it('B) Filtro [pending] retorna apenas tarefas pendentes', () => {
        expect().toBe()
    });
    
    it('C) Filtro [completed] retorna apenas tarefas concluidas', () => {
        expect().toBe()
    });

    it('D) Filtro desconhecido retorna todas as tarefas', () => {
        expect().toBe()
    });

    it('E) Lista vazia retorna array vazio', () => {
        expect().toBe()
    });

    it('F) Retorna um novo array', () => {
        expect().toBe()
    });
})*/

/* describe("Exercício 3: Contagem", () => {

    it('A) Lista vazia retorna 0 para contagem', () => {
        expect().toBe()
    });

    it('B) Retorne o total de tarefas [countTasks]', () => {
        expect().toBe()
    });
    
    it('C) Retorna apenas tarefas concluidas [countCompleted]', () => {
        expect().toBe()
    });
    
    it('D) Retorna apenas tarefas pendentes [countPending]', () => {
        expect().toBe()
    });
    
    it('E) Retorna 0 quando não há nenhum tipo', () => {
        expect().toBe()
    });
})*/

/* describe("Exercício 4: Prioridade", () => {
    it('A) Criar tarefa com prioridade high deve retornar [priority: high]', () => {
        expect().toBe()
    });
    
    it('B) Criar tarefa sem prioridade retorna o padrão [priority: medium]', () => {
        expect().toBe()
    });
    
    it('C) Retorna true quando usar [validatePriority] com valor existente', () => {
        expect().toBe()
    });
    
    it('D) Retorna false quando usar [validatePriority] com valor incorreto', () => {
        expect().toBe()
    });

    it('E) Retorna tarefas de alta prioridade ao usar [filterByPriority(tasks, high)]', () => {
        expect().toBe()
    });

})*/

/* describe("Exercício 5: Impedir duplicidade", () => {

    it('A) Retorna true com tarefas de titulo igual [title: Estudar], Estudar', () => {
        expect().toBe()
    });
    
    it('B) Retorna true com tarefas de mesmo nome, case-insensitive [title: Estudar], estudar', () => {
        expect().toBe()
    });
    
    it('C) Retorna false com tarefas de titulo diferentes [title: Estudar], Trabalhar', () => {
        expect().toBe()
    });
    
    it('D) Lança erro quando uma tarefa de mesmo nome já existir', () => {
        expect().toBe()
    });

})*/

/* describe("Exercício 6: Ordem", () => {

    it('A) Lista mista deve retornar pendentes antes de concluídas', () => {
        expect().toBe()
    });
    
    it('B) Lista só com pendentes deve manter a ordem', () => {
        expect().toBe()
    });
    
    it('C) Lista só com concluídas deve manter a ordem', () => {
        expect().toBe()
    });
    
    it('D) Lista vazia deve retornar array vazio', () => {
        expect().toBe()
    });
    
    it('E) Deve retornar um NOVO array', () => {
        expect().toBe()
    });

})*/

/* describe("Exercício 7: Busca de Texto", () => {

    it('A) Retorna tarefas que incluem texto inserido [est = Estudar, Testar]', () => {
        expect().toBe()
    });
    
    it('B) Retorna tarefas que incluem texto "case-insensitive"', () => {
        expect().toBe()
    });
    
    it('C) Se não existem tarefas inclusas, retorna array vazio [searchTasks(tasks, "não-existe")]', () => {
        expect().toBe()
    });
    
    it('D) Se não expecificar local de procura, retorna array vazio [searchTasks([], "nome")]', () => {
        expect().toBe()
    });
    
    it('E) Se a procura estiver vazia, retorna todas as tarefas [searchTasks(tasks,"")]', () => {
        expect().toBe()
    });

})*/