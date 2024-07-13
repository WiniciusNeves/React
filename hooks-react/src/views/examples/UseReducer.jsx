import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">Ola {state.user.name}</span> : <span className="text">Nenhum usuario logado</span>}
                <span className="text">
                    {state.number}
                </span>
                <div>

                    <button className="btn" onClick={() => dispatch({ type: 'login_user', name: 'Joaquim' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'add2_number' })}> +2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'miltu7_number' })}> *7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'div25_number' })}> /25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'inteiro_number' })}> Inteiro</button>
                </div>
            </div>
        </div >
    )
}

export default UseReducer

