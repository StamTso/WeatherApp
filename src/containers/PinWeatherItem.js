import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from './Button';

// Holds and displays the pinned data
class PinWeatherItem extends Component{

    // Checks if there are pinned data sets
    hasPinnedData(){
        return this.props.pinnedData && this.props.pinnedData.length > 0;
    };

    
    render(){
        // If there are pinned data then display them
        if (this.hasPinnedData()) {
           let pinnedData = this.props.pinnedData;
            return(
                pinnedData ?
                // Iterate through the pinned data array 
                //and the iterate through the forecast array of each pinned object
                <div>
                    {pinnedData.map(function(dataObject, index){
                        let city = dataObject.city;
                        return (
                        <div className="pinnedWidgetRow  col-12" key={index}>
                            <div className="row">                                                              
                                <div className="col-2">
                                    <span><h4>{city.name}</h4></span>
                                </div>
                                <div className="col-4">
                                    <Button city={city} searchType="forecast" description="Refresh Weather Data"/>
                                </div>
                            </div>
                            <div className="row">
                            {
                             dataObject.forecast.map(function(forecast, index){
                                return <div className="weather-widget col-2 border border-dark rounded container" key={index}>
                                <h5>{new Date(forecast.dt_txt).toDateString()}</h5>
                                <h6>{forecast.weather[0].main}</h6>
                                <img src={"http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" } alt="" />
                                <p className="bold">{~~forecast.main.temp_max}&deg;C {~~forecast.main.temp_min}&deg;C</p>
                                </div>;
                            })
                        }
                            </div>                       
                        </div>
                        )                                   
                    })}
                </div>
                
                :
                <div>
                    <span><p>Ooops..!</p></span>
                    <span>Our search returned no results for the city you typed.</span>
                    <span>Spell the city name correctly or search for another city and try again!</span>
                </div>
            )
        } 
        // If pinnedData array is empty then don't display anything
        else{
            return (
                null
               )
        }        
    }
}

// connect the pinnedData to the state pinnedData and connect component
const mapStateToProps = (state) => ({
    pinnedData: state.pinDataReducer.pinnedData
    })

PinWeatherItem = connect(mapStateToProps,null)(PinWeatherItem)
export default PinWeatherItem;