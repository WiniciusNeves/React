import { useEffect, useState } from "react";
import Layout from "../components/layout";
export default function int() {

    const [clients, setClients] = useState([])

    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/api/clients/${data}`)
            .then(resp => resp.json())
            .then(data => setClients(data))
            .catch(err => console.log(err))
    }, [data])

    return (
        <Layout title="Int">
            <input type="number" value={data} onChange={e => setData(e.target.value)} style={{color: 'red'}}/>

            {!clients.id ? <p>Nenhum cliente encontrado.</p> :
                <ul>
                    <li>id: {clients.id}</li>
                    <li>Name: {clients.nome} </li>
                    <li>Sobrenome: {clients.sobrenome}</li>
                </ul>
            }
        </Layout >
    )
}
