"use client"
import React from 'react'
import Navbar from '../components/navbar'
import Cam from '../components/Cam'

function call() {
    return (
        <div className="bg-purple-950 gap-8 h-screen w-full justify-center flex items-center">
            <div></div>
            <div className=" h-[30%] w-[30%]  mb-[144px]" ><Cam /></div>
            <div className=" h-[48%] w-[30%] bg-slate-500 " ></div>



        </div>
    )
}

export default call