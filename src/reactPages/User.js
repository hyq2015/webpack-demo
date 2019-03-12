import React,{useState,useEffect } from 'react'
function User() {
    const [count,setCount]=useState(1);
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    });
    return(
        <div>
            <p>your count is {count}</p>
            <button onClick={()=>setCount(count+1)}>click to add count</button>
        </div>
    )
}
export default User
