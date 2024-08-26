import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as toastReducer } from 'react-redux-toastr'

import DashboardReducers from '../common/dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducers from '../billingcycle/BillingCycleReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducers,
    form: formReducer,
    toastr: toastReducer
});

export default rootReducer;
