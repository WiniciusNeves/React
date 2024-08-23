import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getList } from "./BillingCycleAction";

class BillingCycleList extends Component {
    componentDidMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];

        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
               
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr className="bg-primary text-white">
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
