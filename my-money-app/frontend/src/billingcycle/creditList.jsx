import React, { Component } from "react/lib/React";

import Grid from "../common/layout/grid";
import { Field } from "redux-form";
import Input from "../common/form/Input";

class CreditList extends Component {
    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits{${index}}.name}`} component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits{${index}}.value}`} component={Input} placeholder='0,00' readOnly={this.props.readOnly} /></td>
                <td></td>
            </tr >

        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList


