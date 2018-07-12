import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCountry, getCountry } from '../actions';

class Search extends Component{
    changeCountry = e => {
        console.log(e.target.value);
        this.props.setCountry(e.target.value);
    }

    setCountry = () => {
        this.props.getCountry(this.props.country);
    }

    render(){
        return(
            <Fragment>
                <span>
                    <input type='text' onChange={this.changeCountry} />
                    <button onClick={this.setCountry} > Search </button>
                </span>
            </Fragment>
        )
    }
};

const mapDispatchToPros = dispatch => {
    return bindActionCreators({
        setCountry, getCountry 
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        country : state.country
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Search);