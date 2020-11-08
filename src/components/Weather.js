import React from 'react';

const Weather = ({weather, message}) => {
    return (
        <div>
            {!message &&
                <div className='infoWeather'>
                    <p>Location: {weather.city}, {weather.country}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toTimeString()}</p>
                </div>
            }
            <p className='error'>{message}</p>
        </div>
    )
};

export default Weather;