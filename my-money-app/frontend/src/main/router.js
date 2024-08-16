import React from "react/lib/React";
import { Router, Route, Redirect , hashHistory} from "react-router";
import BillingCycle from "../common/billingcycle/billingcycle";
import Dashboard from "../common/dashboard/Dasboard";

export default (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/BillingCycles" component={BillingCycle} />
        <Redirect from="*" to="/" />
    </Router>
)