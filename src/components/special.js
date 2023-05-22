import React from 'react'

function Special(props){

    const changeStateAll = (name, val) =>{
        props.changeState(name, val);
    }

 

    return(
        <div>
            <h1>Options:</h1>
            <button onClick={()=>{changeStateAll("text", [])}} >DELETE ALL</button>
            <button onClick={()=>{changeStateAll("currentSizeFont", 0)}} >LOWER</button>
            <button onClick={()=>{changeStateAll("currentSizeFont", 1)}} >UPPER</button>
        </div>

    );
}

export default Special;
