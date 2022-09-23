import { combineReducers } from 'redux';
import { nftReducer } from './nftReducer'

const allReducers = combineReducers ({
    allNfts: nftReducer,
});

export default allReducers