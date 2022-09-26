import { ActionTypes } from "../constants/action-types";


export const setNewsBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_NEWS_BLOGS,
        payload: blogs, 
    };
};