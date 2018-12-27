import React from 'react';
import { connect } from 'react-redux';
import { pinData } from '../action-creators/index';

// Button which holds the pin functionality for retrived weather data sets
let PinButton=({pinData,forecastData, city, description})=>(
    <div>
        <button className="btn btn-md col-12 App-pinButton" type="button" onClick={(e) => pinData(forecastData, city)}>{description}</button>      
    </div>  
)
const mapDispatchToProps = {
    pinData: pinData
};
PinButton = connect(null,mapDispatchToProps)(PinButton);
export default PinButton;