import React from 'react';
import './video-player-controls.css'

const PlayVideoControls = (props) => {
    return(
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    )
}

export default PlayVideoControls;