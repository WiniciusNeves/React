import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const marge = (value1, value2) =>
    [...value1].map(function (e, i) {
        return `${e}${value2[i] || ""}`
    }).join("")

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myValue1 = useRef(null)
    const myValue2 = useRef(null)

    useEffect(() => {
        count.current++
        myValue2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current++
        myValue1.current.focus()
    }, [value2])



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício 1" />
            <div className="center">
                <div className="">
                    <span className='text'>valor: </span>
                    <span className='text'> {marge(value1, value2)} [</span>
                    <span className='text red'> {count.current} </span>
                    <span className='text'>]</span>
                </div>
                <input type="text" className="input" ref={myValue1} value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 2" />
            <div className="center">

                <input type="text" className="input" ref={myValue2} value={value2} onChange={e => setValue2(e.target.value)} />

            </div>
        </div>
    )
}

export default UseRef


