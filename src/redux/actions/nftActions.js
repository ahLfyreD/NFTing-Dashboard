import { ActionTypes } from "../constants/action-types"

export const setNfts = (nfts) => {
    return {
        type: ActionTypes.SET_NFTS,
        payload: nfts, 
    };
};

export const selectedNfts = (nft) => {
    return {
        type: ActionTypes.SELECTED_NFT,
        payload: nft, 
    };
};

export const setNewsBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_NEWS_BLOGS,
        payload: blogs, 
    };
};