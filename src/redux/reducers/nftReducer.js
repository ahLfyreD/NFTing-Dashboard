import { ActionTypes } from "../constants/action-types";

const initialStates = {
    nfts: []
        
};
export const nftReducer = (state = initialStates, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NFTS:
            return {...state, nfts: payload}
        default:
            return state
    };
};