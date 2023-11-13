import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Imgs/mono-gram.png'

function Navbar(props) {
    return (
        <div className="flex justify-between bg-header-clr w-full px-171 py-5">
            {/* <div><a href=""><img src="Imgs/mono-gram.png" alt=""></a></div> */}
            <img src={logo}/>
            <div className="flex items-center gap-30">
                <a className="text-base hover:text-hover-a-clr" href="">Home</a>
                <a className="text-base hover:text-hover-a-clr" href="">Package</a>
                <a className="text-base hover:text-hover-a-clr" href="">Blog</a>
                <a className="text-base hover:text-hover-a-clr" href="">Contact Us</a>
                <a className="text-base hover:text-hover-a-clr" href="">Login</a>
                <button className="bg-signup-btn px-8 py-4 text-white text-base font-semibold rounded-[10px]">Sign
                    Up
                </button>
            </div>

        </div>
    )
}
export default Navbar;