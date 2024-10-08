const INITAL_STATE = {list: []}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLE_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}