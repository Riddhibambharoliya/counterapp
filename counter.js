import React from "react";
const { useState, useEffect } = require("react");

function Counter(){

    const [count,setcount] = useState(0);

    useEffect(()=>{
       document.title =`set the counter ${count}`;
    },[count]);

    return(
        <>
        
        <h1 className="counter"> welcome to mine counter app!!</h1>
        <h1  className="count">{count}</h1>
        <button className="button" onClick={()=>setcount(count+1)}> Add Me!!</button>
        <br></br>
        <button className="but" onClick={()=>setcount(count-1)}>Remove it!</button>
        </>
    );
}

export default Counter;

