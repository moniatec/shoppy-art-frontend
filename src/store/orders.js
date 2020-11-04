
import { apiBaseUrl } from "../config";
const ORDERS = "SHOPPY/orders/ORDERS"
const ORDER = "SHOPPY/orders/ORDER"
const SET_ORDER = "SHOPPY/orders/SET_ORDER"
const DEL_ORDER = "SHOPPY/orders/DEL_ORDER"
const UPDATE_ORDER = "SHOPPY/orders/UPDATE_ORDER"
export const orders = (list) => ({ type: ORDERS, list });

//send get req to get all order 
export const getOrders = () => async (dispatch, getState) => {
    const {
        authentication: { token },
    } = getState();
    const res = await fetch(`${apiBaseUrl}/orders`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });

    if (res.ok) {
        const list = await res.json();
        dispatch(orders(list.orders))
    }
}

export default function reducer(state = { list: [], order: {} }, action) {
    switch (action.type) {
        case ORDERS: {
            return {
                ...state,
                list: action.list
            }
        }
        case ORDER: {
            return {
                ...state,
                order: action.resOrder.order
            }
        }
        default:
            return state;
    }
}