import axios from 'axios';
const BASE_URL = 'http://localhost:3000/api';

export function getSummary() {
    return dispatch => {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(response => {
                // Supondo que a resposta é um array com um único objeto
                const data = response.data[0] || {};
                console.log('API response:', data); // Verifique a estrutura dos dados
                dispatch({
                    type: 'BILLING_SUMMARY_FETCHED',
                    payload: { data }
                });
            })
            .catch(error => {
                console.error('API error:', error);
                // Tratar erro, se necessário
            });
    };
}
