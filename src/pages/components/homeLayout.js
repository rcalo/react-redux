import React from 'react';
import './HomeLayout.css';

function HomeLayout(props){
    return(
        <section className='HomeLayout'>
            {props.children}
        </section>
    )

}

export default HomeLayout;