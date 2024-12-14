import React, { useState } from "react";

function Listrender() {
    const [data,setdata] = useState([

        {
            brand:"Hyundai",
            model:"i10",
            Price:450000,
            carimg:"https://carwow-uk-wp-3.imgix.net/i10-driving-front-5.jpg"
        },
        {
            brand:"Mahendra",
            model:"XUV 700",
            Price:1100000,
            carimg:"https://th.bing.com/th/id/OIP.boxIJ8w_oZ2iwcB9SCA7ngHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7"
        },
        {
            brand:"Kia",
            model:"seltos",
            Price:800000,
            carimg:"https://th.bing.com/th/id/OIP.O2INxrV15i0-2SgKHR3MSQHaD4?w=315&h=180&c=7&r=0&o=5&pid=1.7"
        }

        
    ]);

    return (
        <div>
            <h1>Listrender</h1>

            {data.map((a)=> (
                <div>
                    <h1>{a.brand}</h1>
                    <img height={300} width={400} src={a.carimg} />
                </div>
            ))}
        </div>
    )
}

export default Listrender