import React from 'react';

const icon = ( (props) => {
    const {size, color} = props
    return(
        <svg
            fill={color}
            height={size}
            width={size}
            viewBox='0 0 32 32' 
        >
            {props.children}
        </svg>
    )
}) 

export default icon;