import { combineReducers } from 'redux';
import DashboardReducers from '../common/dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducers from '../billingcycle/BillingCycleReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducers
});

export default rootReducer;
