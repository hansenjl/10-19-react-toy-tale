import React from 'react'

export default function ToyFilter(props){
    return(
        <div>
            <input type="text" placeholder="Search for a toy..." onChange={props.handleInputChange}/>
        </div>
    )

}
