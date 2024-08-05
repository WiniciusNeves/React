import React from "react";

export default props => (
    <header className="bg-light text-dark p-3">
        <h2 className="display-4 ">{props.name} <small className="text-muted">{props.small}</small></h2>
    </header>
);