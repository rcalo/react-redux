import React from 'React';
import PlayList from '../../playlist/components/playList';
import './category.css'

const category = ((props) => {
    const iconSize = 24;
    const iconColor = '#a1a1a1'; 
    //Dibuja una sola categoría, recibe en props un item de categoria 
   
    // const playList = props.playlist.map((id) => {
    //    return props.medias[id]
    // })  
    return(        

        
        <div className='category-container'>
            <h4 className='category-description'>{props.description}</h4>
            <h2 className='category-title'>{props.title}</h2>
            <PlayList                 
                list={props.playlist}
                clickModal={props.clickModal}
            />
        </div>
    )
})

export default category;