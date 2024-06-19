import React from "react";
import './Card.css';

export default function Card(props) {
    const style = {
        backgroundColor: props.style?.backgroundColor,
    }
    return (
        <div className="Card" style={style}>
                <h1>{props.title}</h1>
                <p>{props.children}</p>
        </div>
    )
}
