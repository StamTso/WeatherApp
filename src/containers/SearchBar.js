import React from 'react';
//import { connect } from 'react-redux';
import Button from './Button';

let SearchBar = () => (
    <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>                                  
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search by city name..." />
                                    </div> 
                                    <div className="col pl-2">
                                    <Button />
                                    </div>                                  
                                </div>
                            </form>
                        </div>
);

export default SearchBar;