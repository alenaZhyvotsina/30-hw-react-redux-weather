import {applyMiddleware, createStore} from 'redux';
import weatherReducer from "../reducers/weatherReducer";
import thunk from 'redux-thunk';

const initialState = {weather: null, message: 'Enter city name'};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk));

export default store;
