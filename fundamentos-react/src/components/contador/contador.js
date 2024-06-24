import React, { Component } from 'react';

class Contador extends Component {
    state = {
        contador: 0
    };
    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={() => this.setState((prevState) => ({ contador: prevState.contador + 1 }))}>Adicionar</button>
            </div>
        );
    }
}

export default Contador
