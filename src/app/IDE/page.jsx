"use client"
import './ide.css'
import Iframe from "react-iframe";
import Cam from "../components/Cam";
// import React from 'react'

function Ide() {
    return (
        <div className="h-screen w-full relative">

            <Cam className=' absolute z-20  bottom-3 left-3 h-[250px]  rounded-xl' />
            <Iframe
                url="https://www.jdoodle.com/plugin"
                // width="1200px"
                // height="720px"
                id=""
                className="h-screen z-0 w-full"
            // display="block"
            // position="relative"
            />

        </div>
    )
}

export default Ide;