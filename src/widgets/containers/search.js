import React, {Component} from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';


class SearchContainer extends Component {
    state = {
        value:'Ramiro'
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //connect en este caso hace que en las props tenga disponible dispatch
        this.props.actions.searchAsyncVideo(this.input.value)   
    }

    setInputRef = (element) => {
        this.input = element;
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return(
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            >
            </Search>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);