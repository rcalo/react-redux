import React, { Component } from 'react';
import Media from '../components/media';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {
    
    openModal = (id) => {
        this.props.actions.openModal(id)
    }

    render(){
        return(
            <Media
                openModal={this.openModal}
                cover={this.props.data.get('cover')}
                title={this.props.data.get('title')}
                author={this.props.data.get('author')}
                id={this.props.data.get('id') } 
                key={this.props.data.get('id') }
            >

            </Media>
        )
        // return <Media {...this.props.data} />
    }

}

function mapStateToProps (state, props) {   
    return{
        data: state.getIn(['data','entities','media', props.id])
    }
    
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
