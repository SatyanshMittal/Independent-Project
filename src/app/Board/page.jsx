"use client"
import React from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
import Cam from '../components/Cam';

function Board() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>For Sysytem Desgin Interviews</h1>
            <Cam className='absolute z-20  bottom-3 left-3 h-[250px]  rounded-xl' />
            <div style={{ height: "100vh" }}>
                <Excalidraw />
            </div>
        </>
    );
}

export default Board