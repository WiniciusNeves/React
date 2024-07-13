import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcularFatorial(num) {
    if (num < 0) return " não tem fatorial"
    if (num === 0) return 1
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

const UseEffect = (props) => {
    const [num, setNum] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('')

    useEffect(() => {
        setFatorial(calcularFatorial(num))
        setStatus(num % 2 === 0 ? 'Par' : 'Impar')
    }, [num])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício-01" />
            <div className="center">
                <h1>
                    <span>fatorial:{fatorial}</span>
                </h1>
            </div>
            <input type="number" className="input" value={num} onChange={e => setNum(parseInt(e.target.value))} />

            <SectionTitle title="Exercício-02" />
            <div className="center">
                <h1>
                    <span>Status:{status}</span>
                </h1>
            </div>
        </div>
    )
}

export default UseEffect

