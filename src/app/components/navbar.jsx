import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (

        <div className="absolute  bg-transparent flex flex-col  right-4 top-[40%] z-20   ">

            <Link className="text-3xl  text-green-700 p-2 font-extrabold" href='/'>△</Link>
            <Link className="text-3xl  text-green-700 p-2 font-extrabold" href='/Call'>□</Link>
            <Link className="text-3xl  text-green-700 p-2 font-extrabold" href='/IDE'>✕</Link>
            <Link className="text-3xl  text-green-700 p-2 font-semibold" href='/Board'>O</Link>
            {/* <Link className="text-3xl  text-green-700 p-2 font-semibold" href='/Email'>Y</Link> */}
        </div>
    )
}

export default Navbar