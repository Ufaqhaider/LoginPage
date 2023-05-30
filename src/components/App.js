import React,{useState} from 'react';
import Login from '../Login/login';
 
let isLoggedIn= false;



function App(){
  const [count, Setcount] = useState('TIME');

  function showtime(){
    let time= new Date().toLocaleTimeString();
    Setcount(time)
    setInterval(showtime,1000)
  }



  

  return(
    <div className='container'>
    {isLoggedIn ? <h1>Hello</h1> : <Login/>}

    <h1>{count}</h1>
    <button className='time' onClick={showtime}>Get TIME (click me)</button>

    </div>

  )
}

export default App;







// for contact app


// import React from 'react';
// import Contacts from './contact_list';
// import Avatar from './avatar';
// import Card from './card';
// function App(){
//   console.log(Contacts)
//   return(
//     <>

//     <h1 className="heading">My Contacts</h1>
//     <Avatar img={Contacts[1].imgURL}/>
//     <Card/>
//     </>
//   )
// }

// export default App;







// this is for emoji app

// import React from 'react';
// import Emojipedia from '../emoji_app/emoji_pedia';



// const App=()=>{
//   return(
//     <Emojipedia/>
//   )
// }





// export default App;