import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../action-creators/index';

let Button=({getWeather, city, searchType, description})=>(
    <div>
        <button className="btn btn-lg btn-success col-12" type="button" onClick={(e) => getWeather(e, city, searchType)}>{description}</button>      
    </div>  
)
const mapDispatchToProps = {
    getWeather: getWeather
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;