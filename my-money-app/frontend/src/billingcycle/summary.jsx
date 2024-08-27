import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="money" value={`R$ ${credit.toFixed(2)}`} text="Total de Créditos" />
                <ValueBox cols="12 4" color="blue" icon="credit-card" value={`R$ ${debt.toFixed(2)}`} text="Total de Débitos" />
                <ValueBox cols="12 4" color="red" icon="bank" value={`R$ ${(credit - debt).toFixed(2)}`} text="Saldo" />
            </Row>
        </fieldset>
    </Grid>

)