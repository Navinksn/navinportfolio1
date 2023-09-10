import React ,{ useState ,useEffect } from "react";
import {Link} from "react-router-dom";
import MyPortfolio from "./MyPortfolio";

function Navbar(){
   
    
    return (
    <nav className='logo'>
         <div>
            <img src="" alt="Logo" />
         </div>
         <a className='toggle'
        >
            <span className="nav__hamburger__line"></span>

            <span className="nav__hamburger__line"></span>

            <span className="nav__hamburger__line"></span>
            </a>
            <div className='items'>
                <ul>
                    <li>
                        <a href="#home" className="navbar--content" >
                            Home</a>
                    </li>
                    <li>
                        <a className="navbar--content" href="#Myportfolio">
                        Portfolio 
                        </a>
                    </li>
                    <li>
                        <a href="#Aboutme" className="navbar--content">
                            About Me</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="navbar--content">
                            Testmonial</a>
                    </li>
                </ul>
            </div>
            <a href="#contactme" className="btn btn-outline-primary">Contact Me</a>
        </nav>
        )
    }
export default Navbar;


