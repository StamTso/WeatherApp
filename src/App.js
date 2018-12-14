import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherItem from './containers/WeatherItem'
import Loading from './containers/Loading'

class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="pt-4">
          <div className="row justify-content-center col-lg">
          <SearchBar />
          </div>
          <div className="row justify-content-center pt-4">
            <span>Press button to get the latest weather status</span>
          </div>
          <div className="row justify-content-center">
          <WeatherItem />
          </div>
          
          <Loading />
          
        </div>      
      </div>
    )
  }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello from the JS entry point!
//           </p>
//           <div>
//          <pre><span>{this.props.testReducer.result}</span></pre>
//         <button onClick={this.testAction}>Say Hello</button>
//       </div>   
//         </header>  
//       </div>    
//     );
//   }
//   testAction = (event) => {
//     this.props.testAction();
//   }
// }
// const mapStateToProps = state => ({
//   ...state
//  });

//  const mapDispatchToProps = dispatch => ({
//   testAction: () => dispatch(testAction())
//  });
// export default connect(mapStateToProps, mapDispatchToProps) (App);





