import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./DashboardAction";
import ContentHeader from "../template/contentHeader";
import Content from "../template/content";
import ValueBox from "../widget/valueBox";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary();
    }

    render() {
        // Verifique a estrutura de summary para garantir que está recebendo dados
        const { credit = 0, debt = 0 } = this.props.summary || {};

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0.0" />
                <Content>
                    <div className="row">
                        <ValueBox cols="12 6 4" color="green" icon="money" value={`R$ ${credit.toFixed(2)}`} text="Receita Total" />
                        <ValueBox cols="12 6 4" color="blue" icon="credit-card" value={`R$ ${debt.toFixed(2)}`} text="Despesa Total" />
                        <ValueBox cols="12 6 4" color="red" icon="bank" value={`R$ ${(credit - debt).toFixed(2)}`} text="Saldo" />
                    </div>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
});

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
