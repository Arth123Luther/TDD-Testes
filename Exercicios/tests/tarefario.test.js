import { describe, it, expect, beforeEach } from 'vitest';
import { removerTarefa, filtrarTarefas } from '../src/tarefario.js';

describe("Exercício 1: Remoção", () => {
    const tarefas = [
        {id: 1, titulo: 'Codificar atividade devops'},
        {id: 2, titulo: 'Commitar atividades'},
        {id: 3, titulo: 'Entregar deveres'},
    ];
    let check;

    beforeEach(() => {
        check = removerTarefa(tarefas, 1);
    })

    it('A) Remove tarefa correta por ID', () => {
        // Verificar se lista de tarefas diminuiu
        expect(check.length).toBe(tarefas.length - 1);

        // Verificar se tarefa foi removida
        expect(check.some(t => t.id === 1)).toBe(false);
    });

    it('B) Remover uma tarefa mantém outras tarefas intactas', () => {
        //Verificar se lista de tarefas removeu apenas uma tarefa
        expect(check.length).toBe(tarefas.length - 1);

        //Verificar se outras tarefas estão presentes
        expect(check.some(t => t.id === 2)).toBe(true);
        expect(check.some(t => t.id === 3)).toBe(true);

        // Caso lista for grande, Verificar se tarefas com id removido não existem
        expect(check.every(t => t.id !== 1)).toBe(true);
    });

    it('C) Retorna um novo array', () => {
        expect(check).not.toBe(tarefas);
    });

    it('D) Retorna lista completa é enviado ID inexistente', () => {
        const checkFalso = removerTarefa(tarefas, 99);

        // Verifica se nada foi removido, mantém mesmo tamanho
        expect(checkFalso.length).toBe(tarefas.length);

        // Verifica se retorna lista intacta
        expect(checkFalso).toEqual(tarefas);
    });

    it('E) Retorna array vazio quando lista é vazia', () => {
        const checkVazio = removerTarefa([], 1);
        expect(checkVazio).toEqual([]);
        expect(checkVazio.length).toBe(0);
    });
})

describe("Exercício 2: Filtro", () => {
    const tarefas = [
        { id: 1, title: 'Estudar TDD', status: 'completed' },
        { id: 2, title: 'Commitar Códigos', status: 'pending' },
        { id: 3, title: 'Entregar Projeto', status: 'pending' },
    ];

    it('A) Filtro "all" retorna todas as tarefas', () => {
        const listaCheia = filtrarTarefas(tarefas, 'all');

        // Checa se lista filtrada tem o mesmo tamanho da lista completa
        expect(listaCheia.length).toBe(tarefas.length);

        // Checa se lista filtrada possue mesmas tarefas da lista completa
        expect(listaCheia).toEqual(tarefas);
    });

    it('B) Filtro "pending" retorna tarefas pendentes', () => {
        const listaPendente = filtrarTarefas(tarefas, 'pending');
        
        // Checa se lista possui tamanho de acordo de tarefas pendentes (2, neste exemplo)
        expect(listaPendente.length).toBe(2);

        // Checa se todos as tarefas nesta lista são classificados como pendente aparecem
        expect(listaPendente.every(t => t.status === 'pending')).toBe(true);
    });

    it('C) Filtro "completed" retorna tarefas concluídas', () => {
        const listaCompletada = filtrarTarefas(tarefas, 'completed');

        // Checa se lista possui tamanho de acordo de tarefas completas (1, neste exemplo)
        expect(listaCompletada.length).toBe(1);

        // Checa se todos as tarefas nesta lista são classificados como concluída aparecem
        expect(listaCompletada.every(t => t.status === 'completed')).toBe(true);
    });

    it('D) Filtro desconhecido retorna todas as tarefas (default)', () => {
        const listaDesconhecida = filtrarTarefas(tarefas, 'ibhdaw');

        // Mesma checagens de lista cheia (all)
        expect(listaDesconhecida.length).toBe(tarefas.length);
        expect(listaDesconhecida).toEqual(tarefas);
    });

    it('E) Lista vazia retorna array vazio', () => {
        const listaVazia = filtrarTarefas([], 'pending');

        // Checa se array retornado está vazio sem itens
        expect(listaVazia).toEqual([]);
        expect(listaVazia.length).toBe(0);
    });

    it('F) Retorna um novo array (imutabilidade)', () => {
        const check = filtrarTarefas(tarefas, 'all');
        expect(check).not.toBe(tarefas);
    });
})