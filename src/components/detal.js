import React from 'react';
 

const Detail=(props)=>{
    return(
        <>
        <p className="info">{props.phone}</p>
        <p className="info">{props.emails}</p>
        </>
    )
}

export default Detail;