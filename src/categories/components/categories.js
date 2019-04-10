import React from 'React';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search'
import Media from '../../playlist/components/media'

const categories = ((props) => { 
    const {categories} = props
    return(
        <div className='categories' >
            <SearchContainer>
            </SearchContainer>
            <div className="cateriores-filter">
                {
                    props.isLoading &&
                    <p>cargando videos</p>
                
                }
                {
                    props.search.map((item) => {
                        return(
                            <Media
                                openModal={props.clickModal} 
                                cover={item.get('cover')}
                                title={item.get('title')}
                                author={item.get('author')}
                                id={item.get('id')}
                                key={item.get('id')} 
                            >
                            
                            </Media> 
                        )
                    })
                }
            </div>
            {
                categories.map((item) => {                     
                    return (
                            <Category
                            description={item.get('description')}
                            title={item.get('title')}
                            playlist={item.get('playlist')}
                            key={item.get('id')}
                            clickModal={props.clickModal}
                        />
                        
                        )}
                )
            }
        </div>
                
        )   
})


export default categories;