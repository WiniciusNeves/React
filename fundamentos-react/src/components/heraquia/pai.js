import React from "react";
import Filho from "./filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho nome="Paulo" sobrenome={props.sobrenome} />
        </div>
    )
}