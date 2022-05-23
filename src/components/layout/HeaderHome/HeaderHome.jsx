import React from 'react'
import { Logo } from "../../UI/Logo/Logo";
import { NavHome } from '../../UI/NavHome/NavHome';
import './Header.css'

export const HeaderHome = () => {
  return (
    <>
        <div className='header'>
            <div className='logo_section'>
                <Logo />
                <h1>MY FIRST APP</h1>
            </div>
            <div className='nav_section'>
                <NavHome />
            </div>
        </div>
    </>
  )
}
