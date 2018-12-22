import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../action-creators/index';

// Button container for SearchBar
let Button=({getWeather, city, searchType, description})=>(
    <div>
        <button className="btn btn-lg col-12 App-button" type="button" onClick={(e) => getWeather(e, city, searchType)}>{description}</button>      
    </div>  
)
const mapDispatchToProps = {
    getWeather: getWeather
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;