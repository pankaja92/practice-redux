import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';

class View extends Component {
    render(){
        const { details } = this.props
        return(
            <div>
                <h2>This is the country details - </h2>
                {this.props.isFetching ? <Spinner /> : <p>Done !</p>}
                <h3>{details.capital}</h3>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return { 
        details : state.details,
        isFetching : state.isFetching
    }
}

export default connect(mapStateToProps)(View);