import { useState } from "react";
import Layout from "../components/layout";

export default function Estado() {

    const [numero, setNumero] = useState(0)
    function incrementar() {
        setNumero(numero + 1)
    }
    function decrementar() {
        setNumero(numero - 1)
    }
    return (

        <Layout title="Estado">
            <div >
                <span>{numero}</span><br />
                <button onClick={incrementar}>Incrementar</button><br />
                <button onClick={decrementar}>Decrementar</button>
            </div>
        </Layout>
    );
}
