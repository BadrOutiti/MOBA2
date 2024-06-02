"use client"


import React, { useState } from 'react';
import './TrafficLight.css';
import Light from "@/app/light/Light";

function TrafficLight(){
    const [activeIndex, setActiveIndex] = useState(0)
    const [trafficState, setTrafficState] = useState(0) // 0 = Drive, 1 = Stop

    const handleClick = () =>{
        if(activeIndex === 2 && trafficState === 0){
            setTrafficState(1) // Set to Drive
            setActiveIndex(1) // Set to yellow
        }
        else if(activeIndex === 0 && trafficState === 1){
            setTrafficState(0) // Set to Drive
            setActiveIndex(1) // Set to yellow
        }
        else{
            trafficState === 0 ? setActiveIndex(activeIndex + 1) : setActiveIndex(activeIndex -1)
        }
    }

    return (
        <div onClick={handleClick}
            className={"trafficlight"}>
            <Light color="red" active={activeIndex === 0}/>
            <Light color="yellow" active={activeIndex === 1}/>
            <Light color="green" active={activeIndex === 2}/>
        </div>
    )
}

export default TrafficLight;