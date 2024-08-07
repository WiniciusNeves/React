import './Intervalo.css';
import React from 'react';

import Cards from './Card';
import { connect } from 'react-redux'

const Sorteio = props => {
    const { min, max } = props
    const sorteio = parseInt(Math.random() * (max - min)) + min
    return (
        <Cards title="Sorteio" green >
            <div className="Intervalo"  >
                <span>
                    <span>Resultado:</span>
                    <strong>{sorteio}</strong>

                </span>
            </div>
        </Cards>
    )
}

function mapStateToProps(state) {
    return {
        min: state.number.min,
        max: state.number.max
    }
}

export default connect(mapStateToProps)(Sorteio)    