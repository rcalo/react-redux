import React from 'react'
import './volume.css'
import VolumeIcon from '../../icons/components/volume'

const Volume = (props) => {
    const {handleVolumeClick} = props;

    return(
        <button 
            className="Volume"
            onClick={handleVolumeClick}
        >
            <VolumeIcon
                size={25}
                color={"white"}
            >

            </VolumeIcon>
            <div className="Volume-range">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                    >
                </input>
            </div>
        </button>
    )
}

export default Volume;