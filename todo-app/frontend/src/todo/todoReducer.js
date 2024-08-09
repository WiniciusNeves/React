const INITIAL_STATE = { description: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload || [] }; // Atualiza a lista com os dados da busca
        case 'TODO_ADD':
            return {
                ...state,
                description: '', // Limpa a descrição após adicionar uma tarefa
                list: [...state.list, action.payload]
            };
        case 'TODO_MARKED_AS_DONE':
            return {
                ...state,
                list: state.list.map(todo => {
                    return todo._id === action.payload._id
                        ? { ...todo, done: true }
                        : todo;
                })
            };
        case 'TODO_MARKED_AS_PENDING':
            return {
                ...state,
                list: state.list.map(todo => {
                    return todo._id === action.payload._id
                        ? { ...todo, done: false }
                        : todo;
                })
            };
        case 'TODO_REMOVED':
            return {
                ...state,
                list: state.list.filter(todo => todo._id !== action.payload._id)
            };
        case 'TODO_CLEAR':
            return {
                ...state,
                description: '' // Apenas limpa o campo de descrição
                // A lista de tarefas não é afetada
            };
        default:
            return state;
    }
}
