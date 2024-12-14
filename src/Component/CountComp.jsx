import React, { useState } from "react";

function CountComp(){

    const [count, setcount] = useState(0)

    const handleadd = ()=>{
        setcount(count + 1)
        
    }

       const handlereduce = ()=>{
        setcount(count - 1)
    }
        

    return(
        <>
        
        <h2>CountComp - {count} </h2>

        <button onClick={handleadd}>Add</button>
        <button onClick={handlereduce}>Reduce</button>

        </>
    )
}

export default CountComp