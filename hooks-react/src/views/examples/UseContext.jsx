import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'
import DataContext from '../../data/DataConext'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)
    const { number, text, setNumber } = useContext(AppContext)

    function updateNumber(n) {
        setState({ ...state, Number: n })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div className="center">
                    <span className="text">{state.text}</span>
                    <span className="text">{state.Number}</span>
                </div>
                <div>
                    <button className="btn" onClick={() => updateNumber(0)}>
                        0
                    </button>
                    <button className="btn" onClick={() => updateNumber(state.Number + 1)}>
                        +1
                    </button>
                    <button className="btn" onClick={() => updateNumber(state.Number - 1)}>
                        -1
                    </button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div >
                    <button className="btn" onClick={() => setNumber(0)}>
                        0
                    </button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>
                        +1
                    </button>
                    <button className="btn" onClick={() => setNumber(number - 1)}>
                        -1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext

