import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux'
import Cards from './Card';

const Soma = props => {


    const { min, max } = props
    const soma = (max + min)

    return (
        <Cards title="Soma de Números" purple>
            <div className="Intervalo">
                <span>
                    <span>Resultado:</span>
                    <strong>{soma}</strong>
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

export default connect(mapStateToProps)(Soma)
