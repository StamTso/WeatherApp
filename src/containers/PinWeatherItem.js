import React, {Component} from 'react';
import { connect } from 'react-redux';


class PinWeatherItem extends Component{

    hasPinnedData(){
        return this.props.pinnedData && this.props.pinnedData.length > 0;
    };

    
    render(){
        if (this.hasPinnedData()) {
           let pinnedData = this.props.pinnedData;
            return(
                pinnedData ?
                <div>
                    {pinnedData.map(function(dataObject, index){
                        let city = dataObject.city;
                        return (
                        <div className="pinnedWidgetRow"  key={index}>
                            <div className="row">
                                <span><h4>{city}</h4></span>
                            </div>
                            <div className="row">
                            {
                             dataObject.forecast.map(function(forecast, index){
                                return <div className="weather-widget col-2 border border-dark rounded container" key={index}>
                                <h5>{new Date(forecast.dt_txt).toDateString()}</h5>
                                <h6>{forecast.weather[0].main}</h6>
                                <img src={"http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png" } alt="" />
                                <p className="bold">{~~forecast.main.temp_max}/{~~forecast.main.temp_min}</p>
                                </div>;
                            })
                        }
                            </div>                       
                        </div>       )                                   
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
        
        else{
            return (
                null
               )
        }        
    }
}

const mapStateToProps = (state) => ({
    pinnedData: state.pinDataReducer.pinnedData
    })

PinWeatherItem = connect(mapStateToProps,null)(PinWeatherItem)
export default PinWeatherItem;