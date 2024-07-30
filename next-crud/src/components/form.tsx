import { useState } from "react";
import Input from "./input";
import Client from "@/core/Client";
import Button from "./button";
interface FromProps {
    client: Client
    exit?: () => void
    create?: (client: Client) => void
}

export default function From(props: FromProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.nome ?? '')
    const [age, setAge] = useState(props.client?.idade ?? 0)
    return (
        <div>
            {id ? (

                <Input texto="Código" valor={id} somenteLeitura className="mb-4" />
            ) : false}
            <Input texto="Nome" valor={name} tipo="text" change={setName} className="mb-4" />
            <Input texto="Idade" valor={age} tipo="number" change={setAge} min={0}  />
            <div className="flex justify-end mt-7">
                <Button onClick={() => props.create?.(new Client(name, +age, id))} cor="blue" className="mb-4 " >{id ? 'Alterar' : 'Salvar'}</Button>
                <Button onClick={props.exit} cor="gray" className="mb-4 ml-2" >Cancelar</Button>
            </div>
        </div>
    )
}