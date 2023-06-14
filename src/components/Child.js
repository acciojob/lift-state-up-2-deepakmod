import React from 'react';

function Child({getShowModal}){

    return(
        <div className='child'>
            <h2>Child Component</h2>
            <input type="text" onChange={(event)=>{getShowModal(event.target.value)}}></input>
        </div>
    )
}

export default Child;