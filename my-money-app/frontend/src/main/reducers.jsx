import { combineReducers } from 'redux';
import DashboardReducers from '../common/dashboard/DashboardReducer';
import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer
});

export default rootReducer;
