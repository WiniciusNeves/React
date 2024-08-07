const initialState = {
    min: 1,
    max: 10
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ALTERAR_MIN':
            return {
                ...state,
                min: action.payload
            }
        case 'ALTERAR_MAX':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}