import React,{useState} from 'react';

let isRegister= true;

const Login=()=>{
    const [color,setcolor] = useState('')
    const [name,Setname] = useState('')
    const [heading,Setheading] = useState('') 

    function changeclr(){
      setcolor(document.getElementById('btn').style.background='red');
      document.getElementById('btn').style.color='white'

    }
    function resetClr() {
        setcolor(document.getElementById('btn').style.background = '');
        document.getElementById('btn').style.color=''

    }
    function hello(event){
        Setname(event.target.value)
    }

    function submit(event){
        event.preventDefault();
        Setheading(name)
        
    }





  
    return(
            <form className="form">
                <h1>hello {heading}</h1>
                <input type="text" placeholder="Username"  onChange={hello}/>
                <input type="password" placeholder="Password" />
                {isRegister ? null:<input type="password" placeholder="Confirm Password" />}
                <button id='btn' type="submit" onMouseOver={changeclr} onMouseOut={resetClr} onClick={submit}>{isRegister? "Login": "Register"}</button>
            </form>
    )
    
}


export default Login;