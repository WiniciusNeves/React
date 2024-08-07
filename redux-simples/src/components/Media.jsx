import React from 'react';
import Cards from './Card';

import { connect } from 'react-redux'

const Media = props => {
    const { min, max } = props
    const media = (max + min) / 2

    return (
        <Cards title="Media dos Números" orange>
            <div className="Intervalo">
                <span>
                    <span>Resultado:</span>
                    <strong>{media}</strong>
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

export default connect(mapStateToProps)(Media) // connect com o componente Media