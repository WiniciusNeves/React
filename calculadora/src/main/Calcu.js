import React, { Component } from 'react';
import './Calcu.css';
import Buttons from './components/buttons';
import Display from './components/display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

export default class Calc extends Component {
    state = { ...initialState };

    clearMemory = () => {
        this.setState({ ...initialState });
    }

    setOperation = (operation) => {
        const { current, values, operation: prevOperation } = this.state;
        
        if (current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const currentOperation = prevOperation;

            const valuesCopy = [...values];
            try {
                valuesCopy[0] = this.calculateResult(values[0], values[1], currentOperation);
            } catch (e) {
                valuesCopy[0] = values[0];
            }
            valuesCopy[1] = 0;

            this.setState({
                displayValue: `${valuesCopy[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values: valuesCopy,
            });
        }
    }

    calculateResult = (value1, value2, operation) => {
        let result = 0;
        switch(operation) {
            case '+': result = value1 + value2; break;
            case '-': result = value1 - value2; break;
            case '*': result = value1 * value2; break;
            case '/': result = value1 / value2; break;
            default: break;
        }
        return parseFloat(result.toFixed(10));
    }

    addDigit = (n) => {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {
        return (
            <div className="calc">
                <Display value={this.state.displayValue} />
                <Buttons label="AC" click={this.clearMemory} triple />
                <Buttons label="/" click={() => this.setOperation('/')} operation />
                <Buttons label="7" click={() => this.addDigit(7)} />
                <Buttons label="8" click={() => this.addDigit(8)} />
                <Buttons label="9" click={() => this.addDigit(9)} />
                <Buttons label="*" click={() => this.setOperation('*')} operation />
                <Buttons label="4" click={() => this.addDigit(4)} />
                <Buttons label="5" click={() => this.addDigit(5)} />
                <Buttons label="6" click={() => this.addDigit(6)} />
                <Buttons label="-" click={() => this.setOperation('-')} operation />
                <Buttons label="1" click={() => this.addDigit(1)} />
                <Buttons label="2" click={() => this.addDigit(2)} />
                <Buttons label="3" click={() => this.addDigit(3)} />
                <Buttons label="+" click={() => this.setOperation('+')} operation />
                <Buttons label="0" click={() => this.addDigit(0)} double />
                <Buttons label="." click={() => this.addDigit('.')} />
                <Buttons label="=" click={() => this.setOperation('=')} operation />
            </div>
        );
    }
}
