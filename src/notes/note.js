import React from 'react';
import Notelist from './notelist';

function Note(){
    return(
    <>
    <div className='note_main'>
    {Notelist.map((note)=>(
        <div className='note_box' key={note.id}>
            <h4>{note.title}</h4>
            <p className='h2'>{note.content}</p>
        </div>
    ))}
    </div>
    </>
    )
    
}

export default Note;