import {BACKEND_API_PATH} from '../resources/properties';

const TRANSACTION_ENDPOINT = `${BACKEND_API_PATH}/transaction`;
const ALL_TRANSACTION_ENDPOINT = `${TRANSACTION_ENDPOINT}/all`;
const TRANSACTION_BY_ID_ENDPOINT = (id) => `${TRANSACTION_ENDPOINT}/${id}`;
const ADD_TRANSACTION_ENDPOINT = `${TRANSACTION_ENDPOINT}/`;

export const getAllTransactions = () => {
    return fetch(ALL_TRANSACTION_ENDPOINT, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin'
    });
}

export const addTransaction = async (transaction) => {
    return fetch(ADD_TRANSACTION_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        body: JSON.stringify(transaction)
    });
}

export const getTransactionById = (id) => {
    return fetch(TRANSACTION_BY_ID_ENDPOINT(id), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin'
    });
}

export const deleteTransactionById = (id) => {
    return fetch(TRANSACTION_BY_ID_ENDPOINT(id), {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin'
    });
}
