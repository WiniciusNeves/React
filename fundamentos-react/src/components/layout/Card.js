import React from "react";
import './Card.css';

export default function Card(props) {
    return (
        <div className="Card">
                <h1>{props.title}</h1>
                <p>{props.children}</p>
        </div>
    )
}