import React from "react";
import portudos from "../../data/portudos";

export default function Mercado(props) {
    const lis = portudos.map((portudo) => {
        return <li key={portudo.id}> {portudo.id}{portudo.produto} = {portudo.preco}</li>
    })
    return (
        <table style={{
            display: 'inline-block'

        }}>
            <thead style={{ display: 'inline-block', textDecoration: 'underline' }} >
                <tr style={{ textAlign: 'center' }}>
                    <th>Id</th>
                    <th>Produto</th>
                    <th style={{ textAlign: 'right' }}>Preço</th>
                </tr>
            </thead>
            <tbody style={{ listStyle: 'none' }}>
                {lis.map((li) => <tr key={li.key}>{li}</tr>)}
            </tbody>
        </table>
    )
}