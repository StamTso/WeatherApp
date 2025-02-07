import React, {Component} from 'react';
//import { connect } from 'react-redux';
import Button from './Button';


// Holds the rendering and actions of the search bar
class SearchBar extends Component{
    // Defines a search property type string in the state
    constructor() {
        super();
        this.state = {
            search: ''
        };
    };

    // Listening to the search bar and limiting the string length to 70 characters.
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,70)});
    };
    
    render(){
        // load json with list of cities
        let cities = require('../cityList');
        
        // fiter list of city with the string from the searchbar
        let filteredCities = cities.filter(
            (city) => {
                return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }           
        );
        return(
            <div className="col-10">
            <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center searchCard">
                    <div className="col-1">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>                                  
                    <div className="col-8">
                        <input className="form-control form-control-lg form-control-borderless inputBar" 
                               type="search" 
                               value={this.state.search}
                               onChange={this.updateSearch.bind(this)}
                               placeholder="Search (Example: London)" />
                    </div>                                                                     
                </div>                
            </form>
            <div className="row buttonRow">
                <div className="col-4">
                    <Button city={this.state.search === '' ? null : filteredCities} searchType="weather" description="Today"/>
                </div>  
                <div className="textSpan">
                    <span className="font-weight-bold">OR</span>
                </div>
                <div className="col-4">
                    <Button city={this.state.search === '' ? null : filteredCities} searchType="forecast" description="5 Days"/>
                </div>
            </div>
        </div>
        )
    }
}

export default SearchBar;