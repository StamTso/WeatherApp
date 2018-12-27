import React, {Component} from 'react';
import { connect } from 'react-redux'
import PinButton from './PinButton';

// Holds the logic for rendering retrived data in weather cards accordingly
class WeatherItem extends Component{
    /**
     * Checks if weather data are for current weather
     * or forecast.
     */
    isForecast(){
       return this.props.currentWeather && this.props.currentWeather.list 
              && this.props.currentWeather.list.length > 0;
    };

    /**
     * Checks if there are pinned data sets
     */
    hasPinnedData(){
        return this.props.pinnedData && this.props.pinnedData.length > 0;
    };

    /**
     * Returns a date string with current date.
     */
    getDate(){
        if(this.props.currentWeather){
            return new Date().toDateString();
        }       
    }
    
    render(){
        // If retrieved data are forecast then it
        // filters and renders forecast for 5 days
        if (this.isForecast()) {
            let filteredForecast = this.props.currentWeather.list.filter(
                (forecast) => {return forecast.dt_txt.includes("12:00:00")});
            const selectedCity = this.props.currentWeather.city;
            const cityName = selectedCity.name;
            return(
                filteredForecast ?
                <div className="row">
                    {filteredForecast.map(function(forecast, index){
                        return <div className="weather-widget col-2 border border-dark rounded container" key={index}>
                            <h6>{new Date(forecast.dt_txt).toDateString()}</h6>
                            <h6>{cityName}</h6>
                            <h6>{forecast.weather[0].main}</h6>
                            <img src={"http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" } alt="" />
                            <p className="bold">{~~forecast.main.temp_max}&deg;C  {~~forecast.main.temp_min}&deg;C</p>
                        </div>;
                        
                    })}
                    <div>
                        <PinButton description="Pin Data" forecastData={filteredForecast} city={selectedCity}/>
                    </div>
                </div>
                
                :
                null
            )
        } 
        
        // Else it displays the current weather element
        else{
            return (
                this.props.currentWeather ?
                <div className="row justify-content-center weather-widget">
                    <div className="border border-dark rounded container">
                        <h6>{this.getDate()}</h6>
                        <h6>{this.props.currentWeather.name}</h6>
                        <h6>{this.props.currentWeather.weather[0].main}</h6>
                        <img src={"http://openweathermap.org/img/w/" + this.props.currentWeather.weather[0].icon + ".png" } alt="" />
                        <p className="bold">{this.props.currentWeather.main.temp_max}&deg;C  {this.props.currentWeather.main.temp_min}&deg;C</p>
                    </div>      
                </div>
                :
                null
            )
        }        
    }
}

const mapStateToProps = (state) => ({
    currentWeather: state.weatherReducer.weather,
    pinnedData: state.pinDataReducer.pinnedData
    })

WeatherItem = connect(mapStateToProps,null)(WeatherItem)
export default WeatherItem;