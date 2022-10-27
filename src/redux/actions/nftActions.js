import { ActionTypes } from "../constants/action-types";

export const setNfts = (nfts) => {
    return {
        type: ActionTypes.SET_NFTS,
        payload: nfts, 
    };
};

export const showCategories = (categories) => {
    return {
        type: ActionTypes.SHOW_CATEGORY,
        payload: categories,
    };
};

export const showArtCategories = (artCategories) => {
    return {
        type: ActionTypes.SHOW_ARTCATEGORY,
        payload: artCategories,
    };
};

export const selectedNfts = (nft) => {
    return {
        type: ActionTypes.SELECTED_NFT,
        payload: nft, 
    };
};

export const selectedProfiles = (profile) => {
    return {
        type: ActionTypes.SELECTED_PROFILE,
        payload: profile, 
    };
};

