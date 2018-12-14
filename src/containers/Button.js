import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../action-creators/index';
import {getForecast} from '../action-creators/index';

let Button=({getWeather, getForecast})=>(
    <div>
        <button className="btn btn-lg btn-success" type="button" onClick={getWeather}>Today</button>
        <span className="pl-2 pr-2">or</span>
        <button className="btn btn-lg btn-success" type="button" onClick={getForecast}>5 day forecast</button>
    </div>  
)
const mapDispatchToProps = {
    getWeather: getWeather,
    getForecast: getForecast,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;