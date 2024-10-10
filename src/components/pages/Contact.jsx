import React, { useEffect, useRef, useState } from "react";
import "./Timer.css"
export const Contact = () => {
  const [time,setTime]= useState({
    hour: "",
    minute: "",
    second: "",
})
const [isRunning,setIsRunning]= useState(false)
const interRaf = useRef(null)
const handleStart=()=>{
    if(time.hour.lenght ===0 && time.minute.lenght ===0 && time.second.lenght ===0){
        return
    }
    setIsRunning(!isRunning)
}
const handleReset=()=>{
    clearInterval(interRaf.current)
    setTime({
        hour: "",
    minute: "",
    second: "",
    })
    setIsRunning(false)
    console.log("reset")
}
useEffect(()=>{
if(isRunning){
interRaf.current = setInterval(()=>{
    setTime((preTime)=>{
const copyPrTime = {...preTime}
copyPrTime.second--
if(copyPrTime.second<0){
copyPrTime.minute--
copyPrTime.second=59
if(copyPrTime.minute<0){
    copyPrTime.hour--
    copyPrTime.minute = 59
    if(copyPrTime.hour<0){
        clearInterval(interRaf.current)
        return {hour:"",minute:"",second:""}
    }
}
}
return copyPrTime
    })
},1000)
}
return ()=>{
clearInterval(interRaf.current)
}
},[isRunning])
const handleChange=(e,filed)=>{
    const value = parseInt(e.target.value,10) || 0;
    const copyTime = {...time}
    copyTime[filed]= value
    copyTime.minute+= Math.floor(copyTime.second/60)
    copyTime.second = copyTime.second %60
    copyTime.hour+=Math.floor(copyTime.minute/60)
    copyTime.minute = copyTime.minute%60
    setTime(copyTime)
console.log(e.target.value,filed)
}
  return (
    <>
 <div className="text-center">
        <div className="inpu">
        <input disabled={isRunning} value={time.hour} onChange={(e)=>handleChange(e,"hour")} type="text" placeholder='HH' />:
    <input disabled={isRunning} value={time.minute} onChange={(e)=>handleChange(e,"minute")} type="text" placeholder='MM' />:
    <input disabled={isRunning} value={time.second} onChange={(e)=>handleChange(e,"second")} type="text" placeholder='SS' />
        </div>
        <div className="timebu">
            <button onClick={handleStart} className='btn btn-warning'>{isRunning?"Pause":"Start"}</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={handleReset} className="btn btn-danger">Reset</button>
        </div>
    </div>   
    </>
  )
};
