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