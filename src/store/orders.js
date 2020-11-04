
import { apiBaseUrl } from "../config";
const ORDERS = "SHOPPY/orders/ORDERS"
const ORDER = "SHOPPY/orders/ORDER"
const SET_ORDER = "SHOPPY/orders/SET_ORDER"
const DEL_ORDER = "SHOPPY/orders/DEL_ORDER"
const UPDATE_ORDER = "SHOPPY/orders/UPDATE_ORDER"

export const orders = (list) => ({ type: ORDERS, list });
export const getOrder = (resOrder) => ({ type: ORDER, resOrder });
export const setOrder = (order) => ({ type: SET_ORDER, order });

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

//send get req to get details of an order wiht orderId
export const getOneOrder = (orderId) => async (dispatch, getState) => {
    // console.log('here')
    const {
        authentication: { token },
    } = getState();

    const res = await fetch(`${apiBaseUrl}/orders/${orderId}`, {

    });

    if (res.ok) {
        const resOrder = await res.json();
        // console.log(resOrder)
        dispatch(getOrder(resOrder))

    }
}

//send post req to create new order 
export const createOrder = (userId, itemId) => async (dispatch, getState) => {
    // const userId = window.localStorage.getItem("currentUserId");
    const res = await fetch(`${apiBaseUrl}/orders`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, itemId }),
    });

    if (res.ok) {
        const { order } = await res.json();
        // window.location.href = window.location.href;

        dispatch(setOrder(order));

    }
};

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
        case SET_ORDER: {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.order
                ],
                setOrder: action.order
            };
        }
        default:
            return state;
    }
}