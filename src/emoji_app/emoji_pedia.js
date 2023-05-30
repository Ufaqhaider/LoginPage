import React from 'react';
import Emoji_list from '../emoji_app/emoji_list';


const Emojipedia=()=>{
    return(
        <>
            <div className='top'>
            < h1>Emojipedia</h1>
            </div>
            <div className='box'>

            {Emoji_list.map((emojis,index)=>(    
                    <div className='content' key={index}>
                        <p className='icon'>{emojis.emoji}</p>
                        <h1 className='name'>{emojis.name}</h1>
                        <p className='meaning'>{emojis.meaning}</p>
                    </div>
               
            ))}
             </div> 

        </>
    )
}

export default Emojipedia;