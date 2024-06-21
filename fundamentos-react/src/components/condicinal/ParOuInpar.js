import React from "react";

export default function ParOuInpar(props) {
    return (
        <div>
            <h1>{props.number % 2 === 0 ? 'Par' : 'Impar'}</h1>
        </div>
    )
}