import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherItem from './containers/WeatherItem'
import Loading from './containers/Loading';
import PinWeatherItem from './containers/PinWeatherItem';

class App extends Component{
  render(){
    return(    
      <main className="App">
        <div>
          <div className=" App-header row pt-4 justify-content-center">
            <header className="col-4">Weather App</header>
          </div>
          <div className="App-search">
            <div className="row justify-content-center">
              <div className="col-12">               
                <div className="col-11">
                  <SearchBar />
                </div>
                <div className="col-1">
                    <Loading />
                </div> 
              </div>                  
            </div>
         
            <div className="row col-12 justify-content-center pt-2">
              <WeatherItem />
            </div>      
            <div className="row col-12 justify-content-center pt-2">
              <PinWeatherItem />
            </div>
          </div>           
        </div>
        <footer className="App-footer footer">
          <div>Copyright <span>&copy;</span> 2018 Stamatios Tsolakidis</div>
        </footer> 
      </main>
      

    )
  }
}
export default App;