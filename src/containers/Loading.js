import React from 'react';
import { connect } from 'react-redux'

// Loading spinner visual for SearchBar
let Loading = ({ loading }) => (
    loading ?
    <div className="Loading-Element">
       <p>LOADING...</p>
    </div> :
    null
    );

// Take the loading value from the state and connect container
const mapStateToProps = (state) => ({loading: state.weatherReducer.loading})
Loading = connect(mapStateToProps,null)(Loading)

export default Loading;