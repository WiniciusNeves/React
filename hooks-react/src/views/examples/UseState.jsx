import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [state, setState] = useState(0)
    const [name, setName] = useState('')
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício-01" />
            <div className="center">
                <span className="text">{state}</span>
                <div>
                    <button className="btn"
                        onClick={() => setState(state + 1)}>
                        +1
                    </button>
                    <button className="btn"
                        onClick={() => setState(state - 1)}>
                        -1
                    </button>
                    <button className="btn"
                        onClick={() => setState(0)}>
                        0
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercício-02" />
            <div className="center">
                <div>
                    <input type="text" className="input"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <span className="text">{name}</span>
            </div>

        </div>
    )
}

export default UseState
