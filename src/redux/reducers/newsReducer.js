import { ActionTypes } from "../constants/action-types";

const initialState = {
    blogs: []
        
};
export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NEWS_BLOGS:
            return {...state, blogs: payload}
        default:
            return state
    };
};