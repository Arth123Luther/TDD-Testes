let _nextId = 1;

export function resetId() {
    _nextId = 1;
}

export function removerTarefa(tarefas, id) {
    return tarefas.filter(t => t.id !== id);
}

export function filtrarTarefas(tarefas, filtro) {
    switch (filtro) {
        case 'completed':
            return tarefas.filter(t => t.status === 'completed');
        case 'pending':
            return tarefas.filter(t => t.status === 'pending');
        default:
            return [...tarefas];
    }
}

export function contarTarefas(tarefas) {
    return tarefas.length;
}

export function contarConcluidas(tarefas) {
    return tarefas.filter(t => t.completed === true).length;
}

export function contarPendentes(tarefas) {
    return tarefas.filter(t => t.completed === false).length;
}

export function criarTarefa(titulo, priority = 'medium', status = 'pending') {
    return { id: _nextId++, titulo, priority, status };
}

export function validarPrioridade(priority) {
    return ['high', 'medium', 'low'].includes(priority);
}

export function filtrarPrioridade(tarefas, priority) {
    return tarefas.filter(t => t.priority === priority);
}

export function tarefaDuplicada(tarefas, titulo) {
    return tarefas.some(t => t.titulo.trim().toLowerCase() === titulo.trim().toLowerCase());
}

export function adicionarTarefa(tarefas, titulo) {
    if (tarefaDuplicada(tarefas, titulo)) {
        throw new Error('Tarefa com este nome já existe');
    }
    return [...tarefas, criarTarefa(titulo)];
}

export function ordenarTarefas(tarefas) {
    const pendentes = tarefas.filter(t => t.completed === false);
    const concluidas = tarefas.filter(t => t.completed === true);
    return [...pendentes, ...concluidas];
}

export function buscarTarefas(tarefas, query) {
    return tarefas.filter(t => t.titulo.toLowerCase().includes(query.toLowerCase()));
}