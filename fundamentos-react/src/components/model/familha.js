import React from "react";

import Familha2 from "./familha2";


export default prop => {
    return (
        <div>
            <h1>Familia</h1>
            <Familha2 name="Pedro" sobrenome="Silva" />
            <Familha2 name="Ana" sobrenome="Silva" />
            <Familha2 name="Gustavo" sobrenome="Silva" />
        </div>


    )
}