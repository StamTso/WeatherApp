import React from 'react';
import { connect } from 'react-redux'

let Loading = ({ loading }) => (
    loading ?
    <div>
       <h4>LOADING</h4>
    </div> :
    null
    );

const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)

export default Loading;