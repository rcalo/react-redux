import schema from '../schemas/index'
import { fromJS } from 'immutable';

const intialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: ''
})

function data(state = intialState, action){
    switch(action.type){
        case 'SEARCH_VIDEO':{
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data