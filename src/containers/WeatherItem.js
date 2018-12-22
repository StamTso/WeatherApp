import React, {Component} from 'react';
import { connect } from 'react-redux'
import Button from './Button';

// Holds the logic for rendering retrived data in weather cards accordingly
class WeatherItem extends Component{
    /**
     * Checks if weather data are for current weather
     * or forecast.
     */
    isForecast(){
       return this.props.currentWeather && this.props.currentWeather.list 
              && this.props.currentWeather.list.length > 0
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
            const cityName = this.props.currentWeather.city.name;
            return(
                filteredForecast ?
                <div className="row">
                    {filteredForecast.map(function(forecast, index){
                        return <div className="weather-widget col-2 border border-dark rounded container" key={index}>
                            <h5>{new Date(forecast.dt_txt).toDateString()}</h5>
                            <h6>{cityName}</h6>
                            <h6>{forecast.weather[0].main}</h6>
                            <img src={"http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" } alt="" />
                            <p className="bold">{~~forecast.main.temp_max}/{~~forecast.main.temp_min}</p>
                        </div>;
                        
                    })}
                    <div>
                        <Button desctription="Pin forecast"/>
                    </div>
                </div>
                
                :
                <div>
                    <span><p>Ooops..!</p></span>
                    <span>Our search returned no results for the city you typed.</span>
                    <span>Spell the city name correctly or search for another city and try again!</span>
                </div>
            )
        } 
        
        // Else it displays the current weather element
        else{
            return (
                this.props.currentWeather ?
                <div className="row justify-content-center weather-widget">
                    <div className="border border-dark rounded container">
                        <h5>{this.getDate()}</h5>
                        <h6>{this.props.currentWeather.name}</h6>
                        <h6>{this.props.currentWeather.weather[0].main}</h6>
                        <img src={"http://openweathermap.org/img/w/" + this.props.currentWeather.weather[0].icon + ".png" } alt="" />
                        <p className="bold">{this.props.currentWeather.main.temp_max}/{this.props.currentWeather.main.temp_min}</p>
                    </div>      
                </div>
                :
                null
            )
        }        
    }
}

const mapStateToProps = (state) => ({
    currentWeather: state.weather
    })

WeatherItem = connect(mapStateToProps,null)(WeatherItem)
export default WeatherItem;