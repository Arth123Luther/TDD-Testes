import { describe, it, expect, beforeEach } from 'vitest';
import { 
    removerTarefa, 
    filtrarTarefas, 
    contarTarefas, 
    contarConcluidas, 
    contarPendentes,
    criarTarefa,
    validarPrioridade,
    filtrarPrioridade,
    tarefaDuplicada,
    adicionarTarefa,
    ordenarTarefas
 } from '../src/tarefario.js';

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

describe("Exercício 3: Contagem", () => {
    const tarefas = [
        { id: 1, title: 'Estudar TDD', completed: true },
        { id: 2, title: 'Commitar Códigos', completed: false },
        { id: 3, title: 'Entregar Projeto', completed: false },
    ];

    it('A) Lista vazia retorna 0 para todas', () => {
        expect(contarTarefas([])).toBe(0);
        expect(contarConcluidas([])).toBe(0);
        expect(contarPendentes([])).toBe(0);
    });

    it('B) Usar contarTarefas retorna o total de tarefas', () => {
        expect(contarTarefas(tarefas)).toBe(tarefas.length);
    });
    
    it('C) Usar contarConcluidas retorna apenas tarefas completadas', () => {
        const totalEsperado = tarefas.filter(t => t.completed === true).length;

        // Neste exemplo, o resultado deve ser 1
        expect(contarConcluidas(tarefas)).toBe(totalEsperado);
    });
    
    it('D) Usar contarPendentes retorna apenas tarefas pendentes', () => {
        const totalEsperado = tarefas.filter(t => t.completed === false).length;

        // Neste exemplo, o resultado deve ser 2
        expect(contarPendentes(tarefas)).toBe(totalEsperado);
    });
    
    it('E) Quando não houver tarefas do tipo, Retorna 0', () => {
        const todasPendentes = [
            { id: 1, title: 'Tarefa 1', completed: false },
            { id: 2, title: 'Tarefa 2', completed: false },
        ];
        const todasCompletas = [
            { id: 1, title: 'Tarefa 1', completed: true },
            { id: 2, title: 'Tarefa 2', completed: true },
        ];

        // Se contarPendentes fosse usado em uma lista de tarefas concluídas
        expect(contarPendentes(todasCompletas)).toBe(0);

        // Se contarConcluidas fosse usado em uma lista de tarefas pendentes
        expect(contarConcluidas(todasPendentes)).toBe(0);
    });
})

describe("Exercício 4: Prioridade", () => {
    const tarefas = [
        { id: 1, title: 'Estudar TDD', priority: 'high' },
        { id: 2, title: 'Commitar Códigos', priority: 'medium' },
        { id: 3, title: 'Entregar Projeto', priority: 'low' },
        { id: 4, title: 'Revisar PR', priority: 'high' },
    ];

    it("A) criarTarefa('Tarefa', 'high') deve retornar tarefa de prioridade alta", () => {
        const tarefa = criarTarefa('Tarefa', 'high');
        expect(tarefa.priority).toBe('high');
    });

    it("B) criarTarefa('Tarefa') deve retornar tarefa de prioridade média (padrão)", () => {
        const tarefa = criarTarefa('Tarefa');
        expect(tarefa.priority).toBe('medium');
    });

    it("C) validarPrioridade deve aceitar parâmetro corretos (true)", () => {
        expect(validarPrioridade('high')).toBe(true);
        expect(validarPrioridade('medium')).toBe(true);
        expect(validarPrioridade('low')).toBe(true);
    });

    it("D) validarPrioridade deve rejeitar valores não existentes (false)", () => {
        expect(validarPrioridade('urgente')).toBe(false);
        expect(validarPrioridade('')).toBe(false);
        expect(validarPrioridade(null)).toBe(false);
    });
    
    it("E) filtrarPrioridade(tarefas, 'high') deve retornar apenas tarefas de alta prioridade", () => {
        const resultado = filtrarPrioridade(tarefas, 'high');
        const totalEsperado = tarefas.filter(t => t.priority === 'high').length;

        expect(resultado.length).toBe(totalEsperado);
        expect(resultado.every(t => t.priority === 'high')).toBe(true);
    });
})

describe("Exercício 5: Duplicadas", () => {
    const tarefas = [
        { id: 1, titulo: 'Estudar' },
        { id: 2, titulo: 'Leitura' },
    ];

    it("A) Deve retornar true com tarefaDuplicada em títulos iguais", () => {
        expect(tarefaDuplicada(tarefas, 'Estudar')).toBe(true);
        expect(tarefaDuplicada(tarefas, 'Leitura')).toBe(true);
    });

    it("B) Deve retornar true com tarefaDuplicada em títulos iguais (case-insensitive)", () => {
        expect(tarefaDuplicada(tarefas, 'estudar')).toBe(true);
        expect(tarefaDuplicada(tarefas, 'leitura')).toBe(true);
    });

    it("C) Deve retornar false com tarefaDuplicada em títulos diferentes", () => {
        expect(tarefaDuplicada(tarefas, 'Trabalhar')).toBe(false);
        expect(tarefaDuplicada(tarefas, 'Cozinhar')).toBe(false);
    });

    it("D) Deve lançar mensagem de erro ao criar tarefa com título que já existe", () => {
        expect(() => adicionarTarefa(tarefas, 'Estudar')).toThrow('Tarefa com este nome já existe');
    });
})

describe('Exercício 6: Ordenança', () => {
    const tarefas = [
        { id: 1, titulo: 'Estudar', completed: true },
        { id: 2, titulo: 'Commitar', completed: false },
        { id: 3, titulo: 'Entregar', completed: true },
        { id: 4, titulo: 'Revisar', completed: false },
    ];

    const apenasPendentes = [
        { id: 1, titulo: 'Commitar', completed: false },
        { id: 2, titulo: 'Revisar', completed: false },
    ];

    const apenasConcluidas = [
        { id: 1, titulo: 'Estudar', completed: true },
        { id: 2, titulo: 'Entregar', completed: true },
    ]

    it('A) Lista mista deve retornar pendentes antes de concluídas', () => {
    const resultado = ordenarTarefas(tarefas);

    // Aqui procuramos as posições das tarefas concluidas e pendentes
    const primeiraConcluida = resultado.findIndex(t => t.completed === true);
    const ultimaPendente = resultado.findLastIndex(t => t.completed === false);

    /*  Ao usar ordenarTarefas, os indices menores pertencem ás pendentes, 
    e os indices maiores ás concluidas. Assim, pendentes aparecem primeiro.
    Indice 0 = Primeira tarefa = pendente
    Indice 2 = Terceira tarefa = concluida */

    // Ordem da nossa lista, por exemplo [Commitar, Revisar, Estudar, Entregar]
    expect(resultado.map(t => t.completed)).toEqual([false, false, true, true])

    // Para qualquer lista ordenada
    expect(ultimaPendente).toBeLessThan(primeiraConcluida);
    });

    it('B) Lista de apenas pendentes deve manter a ordem', () => {
        const resultado = ordenarTarefas(apenasPendentes);
        expect(resultado).toEqual(apenasPendentes);
    });

    it('C) Lista de apenas concluídas deve manter a ordem', () => {
        const resultado = ordenarTarefas(apenasConcluidas);
        expect(resultado).toEqual(apenasConcluidas);
    });

    it('D) Lista vazia deve retornar array vazio', () => {
        expect(ordenarTarefas([])).toEqual([]);
    });
    
    it('E) Deve retornar novo array (imutabilidade)', () => {
        const resultado = ordenarTarefas(tarefas);
        expect(resultado).not.toBe(tarefas);
    });
})