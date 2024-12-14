import React from "react";

import { useForm } from "react-hook-form";

export default function Hookform() {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const onsubmit = (data) => {
        console.log(data);

    }

    console.log(errors);
    

    return (
        <>
            <label>first name</label>
            <input {...register("firstname",{required:"enter a name"})} placeholder="Enter ur name" />
            <p>{errors?.firstname?.message}</p>

            <br /><br /><br />

            <label>Age</label>
            <input {...register("age",{required:"enter the age"})} placeholder="Enter ur age" />
            <p>{errors?.age?.message}</p>

            <br /><br /><br />

            <label>email</label>
            <input {...register("email",{required:"enter an email"})} placeholder="Enter ur email" />
            <p>{errors?.email?.message}</p>

            <br /><br /><br />

            <button onClick={handleSubmit(onsubmit)}>Submit</button>


        </>
    )

}