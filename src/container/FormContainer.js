import {getWeatherAction} from "../actions/weatherAction";
import FormControl from "../components/FormControl";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        getWeather: city => dispatch(getWeatherAction(city))
    }
}

export default connect(null, mapDispatchToProps)(FormControl);