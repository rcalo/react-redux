import React from 'react';
import './full-screen.css';
import FullScreenIcon from '../../icons/components/full-screen'

const FullScreen = (props) => {
    return(
        <div 
            className="FullScreen"
            onClick={props.handleFullScreen}
        >
            <FullScreenIcon
                size={25}
                color={"white"}
            >
            
            </FullScreenIcon>
        </div>
    )
}

export default FullScreen;