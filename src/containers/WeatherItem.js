import React from 'react';
import { connect } from 'react-redux'

let WeatherItem = ({ currentWeather }) => (

currentWeather ?
    <div className="row justify-content-center">
        <div>
            <h5>Today at {currentWeather.name}</h5>
            <h6>{currentWeather.weather[0].main}</h6>
            <img src={"http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png" } alt="" />
            <p><bold>{currentWeather.main.temp_max}/{currentWeather.main.temp_min}</bold></p>
        </div>      
    </div>
    :  
       null
    

);


const mapStateToProps = (state) => ({
    currentWeather: state.weather,
    })

WeatherItem = connect(mapStateToProps,null)(WeatherItem)
export default WeatherItem;