import React from "react";
import If from "./if";

export default function UserInfo({ user = {} }) {
    return (
        <div>
            <If test={user.name}>
                <h1>Seja bem vindo, {user.name}</h1>
                <h2>Este é seu e-mail: {user.email}</h2>
            </If>
        </div>
    );
}
