import React, { PureComponent } from 'react';
import "./media.css"  
import PropType from 'prop-types'   

//PureComponent a diferencia de component ya tiene shouldComponentUpdate, 
//hace que si no cambian los parametros no se renderiza de nuevo

//Utilizado cuando hay un componente que es cambiante.

class Media extends PureComponent {
/*  
    //Con ECMAScript 6, con 7 se hace un arrowfunction en el evento
    constructor(props){
        super(props)
        this.state = {
            author: this.props.author
        }
     //   this.handleClick = this.handleClick.bind(this)
    } 
*/

    handleClick = (event) => {
        this.props.openModal(this.props.id)
    }

    render () {
        return ( 
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-Cover">
                    <img src={this.props.cover}
                    alt = ""
                    width = "260"
                    height = "160"
                    className="Media-image" 
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propType ={
    cover: PropType.string,
    title: PropType.string.isRequired,
    author: PropType.string,
    type: PropType.oneOf(['video', 'audio'])
}

export default Media; 