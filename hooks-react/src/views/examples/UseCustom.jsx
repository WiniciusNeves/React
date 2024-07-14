import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/userCounter'
import { useFetch } from '../../hooks/useFetch'

import SectionTitle from '../../components/layout/SectionTitle'

const UseCustom = (props) => {

    const [counter, increment, decrement, reset] = useCounter()

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)
    function showStates(states) {
        return (
            <div className="table">
                {states.map(state => (
                    <li key={state.sigla}>{state.nome} - {state.sigla}</li>
                ))}
            </div>
        )
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <div className="center">
                <span className="text">{counter}</span>
                <div>
                    <button className="btn" onClick={increment}>+1</button>
                    <button className="btn" onClick={decrement}>-1</button>
                    <button className="btn" onClick={reset}>Reset</button>
                </div>
            </div>
            <SectionTitle title="Exercício" />

            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : 'Carregando...'}
                </ul>
            </div>
        </div>
    )
}

export default UseCustom

