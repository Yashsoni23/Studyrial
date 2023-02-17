import React from 'react'
import '../output.css';

const Navbar = () => {
    return (
        <>
            <nav className="w-screen absolute top-0 h-max p-4 shadow-7xl flex justify-center items-center gap-16 bg-cyan-200">
                <ul className="flex font-bold text-cyan-900 text-2xl gap-4">
                    <li className=" cursor-pointer  ">Materials</li>
                    <li className=" cursor-pointer  ">Syllabus</li>
                </ul>
                <div className="logo  text-5xl font-bold text-mypink">Studyrials</div>
                <ul className="flex font-bold text-cyan-900 text-2xl gap-4">
                    <li className=" cursor-pointer  ">Projects</li>
                    <li className=" cursor-pointer  ">Career</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
