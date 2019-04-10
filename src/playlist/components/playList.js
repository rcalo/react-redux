import React from 'React';
// import Media from './media';
import './playlist.css'
import MediaContainer from '../containers/media'

//Componente funcional, es una función, más sencillo de probar, lo único que hace es retornar la UI
const playList = ((props) => {
    return (
        <div className='Playlist'>
            {
                props.list.map((item) => {
                    return <MediaContainer
                        id={item} 
                        key={item}
                        openModal={props.clickModal} 
                    /> 
                })
            }
        </div>
    )
})

export default playList;
