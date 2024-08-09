import axios from 'axios';

const url = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const search = (description = '') => {
    const search = description ? `&description=${encodeURIComponent(description)}` : '';
    const request = axios.get(`${url}?sort=-createdAt${search}`);
    return {
        type: 'TODO_SEARCHED',
        payload: request.then(response => response.data)
    };
}

export const add = (description) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(url, { description });
            dispatch({ type: 'TODO_ADD', payload: response.data });
            dispatch(search()); // Recarrega a lista após adicionar
            dispatch(todoClear()); // Limpa o campo de descrição
        } catch (error) {
            console.error("Erro ao adicionar tarefa", error);
        }
    }
}

export const markAsDone = (todo) => {
    return async (dispatch) => {
        try {
            await axios.put(`${url}/${todo._id}`, { ...todo, done: true });
            dispatch({ type: 'TODO_MARKED_AS_DONE', payload: todo });
            dispatch(search()); // Recarrega a lista após marcar como concluída
        } catch (error) {
            console.error("Erro ao marcar tarefa como concluída", error);
        }
    }
}

export const markAsPending = (todo) => {
    return async (dispatch) => {
        try {
            await axios.put(`${url}/${todo._id}`, { ...todo, done: false });
            dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: todo });
            dispatch(search()); // Recarrega a lista após marcar como pendente
        } catch (error) {
            console.error("Erro ao marcar tarefa como pendente", error);
        }
    }
}

export const remove = (todo) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${url}/${todo._id}`);
            dispatch({ type: 'TODO_REMOVED', payload: todo });
            dispatch(search()); // Recarrega a lista após remover
        } catch (error) {
            console.error("Erro ao remover tarefa", error);
        }
    }
}

export const todoClear = () => {
    return (dispatch) => {
        dispatch({ type: 'TODO_CLEAR' }); // Limpa a descrição
        dispatch(search()); // Recarrega a lista de tarefas, se necessário
    };
};