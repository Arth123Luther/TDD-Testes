import { describe, it, expect, beforeEach } from 'vitest';
import removerTarefa from '../src/tarefario.js'

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