import { combineReducers } from 'redux';
import { nftReducer, selectedNftReducer, selectedProfileReducer, categoryReducer } from './nftReducer';
import { newsReducer } from './newsReducer';


const allReducers = combineReducers ({
    allNfts: nftReducer,
    allNews: newsReducer,
    nft: selectedNftReducer,
    profile: selectedProfileReducer,
    allCategory: categoryReducer,
});

export default allReducers