import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTab, selectTab } from '../common/tab/tabAction';

const BASE_URL = 'http://localhost:3000/api';
const INITIAL_STATE = { credits: [{}], debts: [{}] }
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    };
}

export function create(values) {
    return submit(values, 'post');

}
export function update(values) {
    return submit(values, 'put');
}


export function remove(values) {
    return submit(values, 'delete')
}


function submit(values, method) {
    return (dispatch, getState) => {
        const id = values._id ? values._id : '';
        const request = axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(res => {
                toastr.success('Sucesso', 'Ciclo de Pagamento incluído com sucesso');
                dispatch(init());

            })
            .catch(err => {
                toastr.error('Erro', 'Ocorreu um erro ao incluir o Ciclo de Pagamento');
            })
    }
}



//refazer
export function showUpdate(billingCycles) {
    return [
        showTab('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycles)
    ]

}

export function showDelete(billingCycles) {
    return [
        showTab('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycles)
    ]
}

export function init() {
    return [
        showTab('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_STATE)
    ]
}