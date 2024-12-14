import React, { useState } from "react";

export default function Reactform() {

    const [name, setname] = useState("")
    const handlename = (e) => {
        setname(e.target.value);

    }

    const [age, setage] = useState("")

    const handleage = (e) => {
        setage(e.target.value);
    }

    const [mail, setmail] = useState("")


    const handlemail = (e) => {
        setmail(e.target.value);

    }

    


    return (
        <>
            <h1>Reactform</h1>

            <input onChange={handlename} placeholder="Enter ur name" />
            <br/>
            <br/>

            <input type="number" onChange={handleage} placeholder="Enter ur age" />
            <br/>
            <br/>

            <input type="email" onChange={handlemail} placeholder="Enter ur email" />


            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{mail}</h1>


        </>
    )

}