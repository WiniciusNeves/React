import React, { Component } from "react/lib/React";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./BillingCycleAction";
import { reduxForm, Field, formValueSelector } from "redux-form";
import labelAndinput from "../common/form/labelAndinput";
import CreditList from "./creditList";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndinput} readOnly={readOnly} label="Nome" type="text" cols="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={labelAndinput} readOnly={readOnly} label="Mês" type="number" cols="12 4" placeholder="Informe o mês" />
                    <Field name="year" component={labelAndinput} readOnly={readOnly} label="Ano" type="number" cols="12 4" placeholder="Informe o ano" />
                    <CreditList cols="12 6" list={credits} readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>

                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
