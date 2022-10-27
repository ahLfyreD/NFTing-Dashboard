import { ActionTypes } from "../constants/action-types";

const initialStates = {
    nfts: []        
};
const initialCategory = {
    categories: []        
};
const initialArtCategory = {
    categories: []        
};
export const nftReducer = (state = initialStates, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_NFTS:
            return {...state, nfts: payload}
        default:
            return state;
    };
};

export const categoryReducer = (state = initialCategory, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_CATEGORY:
            return {...state, categories: payload}
        default:
            return state;
    };
};

export const artCategoryReducer = (state = initialArtCategory, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_ARTCATEGORY:
            return {...state, artCategories: payload}
        default:
            return state;
    };
};

export const selectedNftReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_NFT:
            return {...state, ...payload}
        default:
            return state;
    };
};

export const selectedProfileReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PROFILE:
            return {...state, ...payload}
        default:
            return state;
    };
};