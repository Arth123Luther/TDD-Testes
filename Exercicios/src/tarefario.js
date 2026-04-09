function removerTarefa(tarefas, id) {
    return tarefas.filter(t => t.id !== id);
}

export default removerTarefa;