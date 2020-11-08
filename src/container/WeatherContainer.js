import Weather from "../components/Weather";
import {connect} from "react-redux";


function mapStateToProps(state){
    return {
        weather: state.weather,
        message: state.message
    }
}

export default connect(mapStateToProps)(Weather);