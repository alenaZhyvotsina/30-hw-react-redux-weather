import {apiKey, baseUrl} from "../utils/Constants";

export const PUT_WEATHER = 'PUT_WEATHER';
export const WEATHER_REQUEST = 'WEATHER_REQUEST';
export const WEATHER_ERROR = 'WEATHER_ERROR';

export const putWeatherAction = cityWeather => (
    {
        type: PUT_WEATHER,
        payload: cityWeather
    }
);

export const requestWeatherAction = () => (
    {
        type: WEATHER_REQUEST,
        payload: 'loading...'
    }
);

export const errorWeatherAction = () => (
    {
        type: WEATHER_ERROR,
        payload: 'Enter correct city name...'
    }
);

export const getWeatherAction = city => {
    return (dispatch) => {
        fetch(`${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    return new Error();
                }
            })
            .then(data => ({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }))
            .then(cityWeather => dispatch(putWeatherAction(cityWeather)))
            .catch(e => {
                dispatch(errorWeatherAction())
            })
    }
}