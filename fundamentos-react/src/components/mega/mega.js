import React from "react";

export default (props) => {

    function gerarNumeros(quantidade) {
        const numeros = Array(quantidade)
            .fill()
            .map(() => Math.floor(Math.random() * 60) + 1)
            .filter((numero, indice, array) => indice === array.indexOf(numero))
            .sort((a, b) => a - b)
        return numeros
    }

    return (
        <div>
            {gerarNumeros(props.qtde).map((numero) => <storage><span key={numero} > {numero}</span></storage>)}
        </div>
    )
}
