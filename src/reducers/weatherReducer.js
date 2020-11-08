import {PUT_WEATHER, WEATHER_ERROR, WEATHER_REQUEST} from "../actions/weatherAction";

function weatherReducer(state, action){
    switch (action.type){
        case PUT_WEATHER:
            return {weather: action.payload};
        case WEATHER_ERROR:
        case WEATHER_REQUEST:
            return {message: action.payload}
        default:
            return state;
    }
}

export default weatherReducer;