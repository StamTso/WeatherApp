import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherItem from './containers/WeatherItem'

class App extends Component{
  render(){
    return(    
      <main>
        <div className="App">
          <div className="row justify-content-center pt-4">
            <header className="col-12 App-header">Rain Predictor</header>
          </div>
          <div className="pt-4">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <SearchBar />
              </div>     
            </div>
         
            <div className="row justify-content-center pt-2">
              <WeatherItem />
            </div>      
          </div>           
        </div>
        <footer className="footer navbar-fixed-bottom"><div>Made by Stamatis Tsolakidis</div></footer> 
      </main>
      

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





