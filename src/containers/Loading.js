import React from 'react';
import { connect } from 'react-redux'

// Loading spinner visual for SearchBar
let Loading = ({ loading }) => (
    loading ?
    <div>
       <p>LOADING</p>
    </div> :
    null
    );

const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)

export default Loading;