import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/layout";
export default function Test() {

    const [state, setState] = useState(0)

    useEffect(() => {
        setState(state + 1)
    }, [])

    return (
        <Layout title="Teste">
            <div>
                <h2>Este é o componente Test</h2>
                <p>{state}</p>
                <button onClick={() => setState(state + 1)} className="btn-primary">mais um</button>
                <p>
                    {JSON.stringify({ nome: "Joaquim", sobrenome: "Silva" })}
                </p>
                <Link href="/">Voltar</Link>
            </div>
        </Layout>
    );
}