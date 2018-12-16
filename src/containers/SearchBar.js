import React, {Component} from 'react';
//import { connect } from 'react-redux';
import Button from './Button';
import Loading from './Loading';



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
        let cities = require('../cityList');
        let filteredCities = cities.filter(
            (city) => {
                return city.name.toLowerCase().indexOf(this.state.search) !== -1;
            }           
        );
        return(
            <div className="col-12">
            <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-1">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>                                  
                    <div className="col-5">
                        <input className="form-control form-control-lg form-control-borderless" 
                               type="search" 
                               value={this.state.search}
                               onChange={this.updateSearch.bind(this)}
                               placeholder="Search (Example: London)" />
                    </div> 
                    <div className="col-4 pl-2">
                    <Button city={filteredCities}/>
                    </div>  
                    <div className="col-2">
                    <Loading />
                    </div>                                
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;