import React, { useState } from "react";

export default function Input(props) {
    const [valor, setValor] = useState("test")
    return (
        <div>

            <h1>{valor}</h1>
            <input value={valor} onChange={e => setValor(e.target.value)} />

        </div>
    )
}