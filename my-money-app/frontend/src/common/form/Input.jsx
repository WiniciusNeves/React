import React from "react/lib/React";

export default props => (
    <input type={props.type} {...props.input} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} />
)