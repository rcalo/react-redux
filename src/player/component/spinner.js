import React from 'react';
import './spinner.css'

const Spinner = (props) => {
    if (props.active){
        return(
            <div className="Spinner">
                <span>cargando..</span>
            </div>
        )
    }else{
        return null
    }

}

export default Spinner;