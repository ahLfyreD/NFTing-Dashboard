import { combineReducers } from 'redux';
import { nftReducer, selectedNftReducer } from './nftReducer';
import { newsReducer } from './newsReducer';

const allReducers = combineReducers ({
    allNfts: nftReducer,
    allNews: newsReducer,
    nft: selectedNftReducer,
});

export default allReducers