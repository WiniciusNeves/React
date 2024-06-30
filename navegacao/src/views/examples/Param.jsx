import React from "react";

import { useParams } from "react-router-dom";
const Param = props => {

    const params = useParams();

    return (
        <div className="Param">
            <h1>Param</h1>
            <p>{params.id}</p>
        </div>
    );
}

export default Param;
