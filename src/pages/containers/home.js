import React, { Component } from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../categories/components/categories';
import Related from '../../related/components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal'
import HandleError from '../../errors/container/error'
import VideoPlayer from '../../player/container/videoPlayer'
import { connect } from 'react-redux';
import {List as list} from 'immutable';
import * as actions from '../../actions/index';
import {bindActionCreators} from 'redux';

class Home extends Component{
   

    handleCloseModal = (event) => {
        this.props.actions.closeModal()
    }

    handleOpenModal = (id) => {
        this.props.actions.openModal(id)
    };


    render(){ 
        return(
            <HandleError>
                <HomeLayout>
                    <Related></Related>
                    <Categories 
                        categories={this.props.categories}
                        clickModal={this.handleOpenModal}
                        search={this.props.search}
                        isLoading={this.props.isLoading}
                    >
                    </Categories>
                    
                    {
                        
                    this.props.modalState.get('visibility') && 
                          
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay={false}
                                    id={this.props.modalState.get('mediaId')}
                                >
                                </VideoPlayer>
                            </Modal>
                        </ModalContainer>   
                    }
                </HomeLayout>
            </HandleError>
        )
    };
}

function mapStateToProps(state, props){

    const categories = state.getIn(['data', 'categories']).map((id) => {
        return state.getIn(['data', 'entities', 'categories', id])
    })

    let results = list()
    const searchQuery = state.getIn(['data', 'search'])

    if (searchQuery){
        results = state.getIn(['data','entities', 'media']).filter(item => {
            return item.get('author').toLowerCase().includes(searchQuery.toLowerCase())
        }).toList()    
    }

    return {
        categories: categories,
        search: results,
        modalState: state.get('modal'),
        isLoading: state.get('isLoading').get('active')
    }
}

function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);