import React, { Component } from 'react';
import Error from '../components/regularError'

class HandleError extends Component {
    
    state = {
        handleError: false, 
    }

    componentDidCatch(){
        this.setState({
            handleError: true,
        })
    }

    render(){
        if (this.state.handleError){
            return(
                <Error></Error>
            )
        }
        return this.props.children
    }

}

export default HandleError;