import React from "react";
import "./Calcu.css"
import { useState } from "react";

export const About = () => {
  const [data,setData] = useState("")
  const getValue = (event) =>{
console.log(event.target.value)
setData(data.concat(event.target.value))
  }

  const calculation =()=>{
setData(eval(data).toString())
  }
  return (
    <>
    <div className='container'>
    <h1 className='btn btn-info'>Muhammad Kamran</h1>
        <div>
            <input type="text" placeholder='0' value={data} onChange={getValue} />
        </div>
        <br />
        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={()=>{setData("")}} value="AC">AC</button>

        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>

        <button onClick={getValue} value="0">0</button>
        <button onClick={()=>{setData(data.slice(0,-1))}} value="Back">Back</button>
        <button onClick={calculation} >=</button>
        <button onClick={getValue} value="/">/</button>
     </div>
    </>
  );
};