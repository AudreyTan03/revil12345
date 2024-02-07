import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { productsListReducer } from './reducers/productsReducers';
// import {composeWithDevTools} from 'redux-devtools-extension';

const reducer ={
    productList: productsListReducer,
};

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
