import { apiBaseUrl } from "../config";
const HOME_ITEMS = "SHOPPY/items/HOME_ITEMS"
const ITEM = "SHOPPY/items/ITEM"
const SET_ITEM = "SHOPPY/items/SET_ITEM"
const DEL_ITEM = "SHOPPY/items/DEL_ITEM"
const UPDATE_ITEM = "SHOPPY/items/UPDATE_ITEM"

export const items = (list) => ({ type: HOME_ITEMS, list });
export const getItem = (resItem) => ({ type: ITEM, resItem });
//send get req to get all items 
export const getHomeItems = () => async (dispatch, getState) => {
    const {
        authentication: { token },
    } = getState();
    const res = await fetch(`${apiBaseUrl}/items`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });

    if (res.ok) {
        const list = await res.json();
        dispatch(items(list.items))
    }
}

//send get req to get details of an item wiht itemId
export const getOneItem = (itemId) => async (dispatch, getState) => {
    const {
        authentication: { token },
    } = getState();

    const res = await fetch(`${apiBaseUrl}/items/${itemId}`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });

    if (res.ok) {
        const resItem = await res.json();

        dispatch(getItem(resItem))

    }
}

export default function reducer(state = { list: [] }, action) {
    switch (action.type) {
        case HOME_ITEMS: {
            return {
                ...state,
                list: action.list
            }
        }
        case ITEM: {
            const newState = Object.assign({}, state)
            newState.resItem = {
                item: action.resItem.item,

            }
            return newState
        }
        default:
            return state;
    }
}