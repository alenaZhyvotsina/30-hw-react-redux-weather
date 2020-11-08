import React, {useState} from 'react';

const FormControl = props => {

    const [city, setCity] = useState('');

    const handleChangeInput = event => {
        setCity(event.target.value);
    }

    const handleClickButton = () => {
        props.getWeather(city);
        setCity('');
    }

    return (
        <div>
            <input onChange={handleChangeInput} value={city} type='text' placeholder='city'/>
            <button onClick={handleClickButton}>Get Weather</button>
        </div>
    );
}

export default FormControl;