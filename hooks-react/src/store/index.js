export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}


export function reducer(state, action) {
    switch (action.type) {
        case 'add2_number':
            return { ...state, number: state.number + 2 }
        case 'login_user':
            return { ...state, user: { name: action.name } }
        case 'miltu7_number':
            return { ...state, number: state.number * 7 }
        case 'div25_number':
            return { ...state, number: state.number / 25 }
        case 'inteiro_number':
            return { ...state, number: Math.trunc(state.number) }




        default:
            return state
    }
}