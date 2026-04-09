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