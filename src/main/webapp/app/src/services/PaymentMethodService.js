import {BACKEND_API_PATH} from '../resources/properties';

const PAYMENT_METHOD_ENDPOINT = `${BACKEND_API_PATH}/payment-method`;
const ALL_PAYMENT_METHOD_ENDPOINT = `${PAYMENT_METHOD_ENDPOINT}/all`;
const GET_PAYMENT_METHOD_BY_ID_ENDPOINT = (id) => `${PAYMENT_METHOD_ENDPOINT}/${id}`;

export const getAllPaymentMethods = () => {
    const response = fetch(ALL_PAYMENT_METHOD_ENDPOINT, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin'
    });
    return response.then(data => data.json());
}

export const getPaymentMethodById = (id) => {
    const response = fetch(GET_PAYMENT_METHOD_BY_ID_ENDPOINT(id), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin'
    });
    return response.then(data => data.json());
}

export const addPaymentMethod = (paymentMethod) => {
    return fetch(PAYMENT_METHOD_ENDPOINT, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: 'same-origin',
        body: JSON.stringify(paymentMethod)
    });

}

