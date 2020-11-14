// const SET_USER = "SET_USER";
export const SET_USER = 'shoppyArt/authentication/SET_USER';
export const SET_TOKEN = 'shoppyArt/authentication/SET_TOKEN';

export const setUserAction = (currentUser) => {
    return { type: SET_USER, currentUser };
};
export const setTokenAction = (token) => {
    return { type: SET_TOKEN, token };
};

// dispatch functions
export const setUser = (user) => (dispatch) => {
    dispatch(setUserAction(user));
};

export const setToken = (token) => (dispatch) => {
    dispatch(setTokenAction(token));
};
// const initialState = {
//     user: {},
// };
export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                currentUser: action.currentUser,
            };
        }

        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
}