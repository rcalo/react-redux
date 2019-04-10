
export function openModal(mediaId){
    return{
        type: 'OPEN_MODAL',
        payload:{
            mediaId,
        }
    }
}

export function closeModal(){
    return{
        type: 'CLOSE_MODAL',
    }
}

export function searchVideo(query){
    return{
        type: 'SEARCH_VIDEO',
        payload:{
            query,
        }
    }
}

export function isLoading(value){
    return{
        type:'IS_LOADING',
        payload:{
            loading: value
        }
    }
}

export function searchAsyncVideo(query){
    return (dispatch) => {
        //acá se puede llamar a métodos asyncronos
        //XHR
        //fetch
        //trae

        dispatch(isLoading(true))

        setTimeout(() => {
            dispatch(isLoading(false))
            dispatch(searchVideo(query))
        },5000)
    }
}
