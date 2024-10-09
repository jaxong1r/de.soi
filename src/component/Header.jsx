import React, { useRef } from 'react'
import '../style/header.css'
import logo from '../image/logo.svg'
import usa from '../image/usa.svg'
import kor from '../image/korzinka.svg'
import burger from '../image/burger.svg'
 import { NavLink } from 'react-router-dom'


function Header() {
  let modal= useRef()
  function openModal (){
  modal.current.classList.add("show_modal")
  }
  function closeModal (){
    modal.current.classList.remove("show_modal")
    } 
  return (
    <header className='header'>
      <div className="modal" ref={modal} >
        <button onClick={closeModal}> X</button>
        <ul>
        <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="">Fun stuff</NavLink></li>
                <li><NavLink to="">Find us</NavLink> </li>
        </ul>
        <ul>
        <li> <a href="">USA</a></li>
                <li><NavLink to="">Contact</NavLink></li>
                <li><NavLink to="">Log in</NavLink></li>
        </ul>
      </div>
      <div className="container">
        <div className="header_wrapper">
          <div className="burger" onClick={openModal} >
            <img src={burger} alt="" />
          </div>
            <ul className='ul'>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><a href="">Fun stuff</a></li>
                <li><a href="">Find us</a> </li>
            </ul>
            <img className='logo' src={logo} alt="" />
            <div className="header_bag">
            <ul className='ul'>
                <li><img className='usa' src={usa} alt="" /><a href="">USA</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Log in</a></li>
                
            </ul>
            <NavLink to="/bag"><img src={kor} alt="" /></NavLink>
            </div>
            
        </div>
      </div>
    </header>
  )
}

export default Header
