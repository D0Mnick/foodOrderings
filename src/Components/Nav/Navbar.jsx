import React, { useState } from 'react'
import logo from '../../Assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { BsBasketFill } from "react-icons/bs";
import './Navbar.css'


function Navbar() {

  const [menu,setMenu] = useState('home')
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
          <CiSearch />
        <div className="navbar-search-icon">
          <BsBasketFill />
        <div className="dot"></div>
        </div>
          <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar