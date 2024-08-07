import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';
import Cards from './Card';
import { alterarMin, alterarMax } from '../store/action/number';

const Intervalo = (props) => {
    const { min, max } = props;

    return (
        <Cards title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        className="input" 
                        value={min} 
                        onChange={e => props.alterarMin(+e.target.value)} 
                    />
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        className="input" 
                        value={max} 
                        onChange={e => props.alterarMax(+e.target.value)} 
                    />
                </span>
            </div>
        </Cards>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.number.min,
        max: state.number.max
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMin: (novoNumero) => dispatch(alterarMin(novoNumero)),
        alterarMax: (novoNumero) => dispatch(alterarMax(novoNumero))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
