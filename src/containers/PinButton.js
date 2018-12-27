import React from 'react';
import { connect } from 'react-redux';
import { pinData } from '../action-creators/index';

let PinButton=({pinData,forecastData, city, description})=>(
    <div>
        <button className="btn btn-lg col-12 App-button" type="button" onClick={(e) => pinData(forecastData, city)}>{description}</button>      
    </div>  
)
const mapDispatchToProps = {
    pinData: pinData
};
PinButton = connect(null,mapDispatchToProps)(PinButton);
export default PinButton;