// import React from 'react';

function Menu(props) {
    return <ul className='menu'>
        {props.links2.map((links2, index) => {
            return (<li key={index}>{links2}</li>)
        })}
    </ul>
}

export default Menu;