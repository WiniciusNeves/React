
export function alterarMin(novoNumero) {
    return {
        type: 'ALTERAR_MIN',
        payload: novoNumero
    }
}

export function alterarMax(novoNumero) {
    return {
        type: 'ALTERAR_MAX',
        payload: novoNumero
    }
}