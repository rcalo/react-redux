import {Map as map} from 'immutable'

const initialState = map({
    active:false
})

function isLoading(state = initialState, actions){
    switch(actions.type){
        case 'IS_LOADING':
            return state.set('active', actions.payload.loading)
        default:
            return state
    }
}

export default isLoading;

