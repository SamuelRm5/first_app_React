import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const NavHome = () => {

  const [modeDark, setModeDark ] = useState(false)

  const handleOn = () => {
    setModeDark(!modeDark);
  }

  useEffect(() => {
    if (modeDark) {
      const btnSwitch = document.getElementById('switch');
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');

    } else{
      const btnSwitch = document.getElementById('switch');
      document.body.classList.remove('dark');
      btnSwitch.classList.remove('active');

    }
  }, [modeDark])
  
  // const darkMode = () => {
    
  //   const btnSwitch = document.getElementById('switch');

  //   document.body.classList.toggle('dark');
  //   btnSwitch.classList.toggle('active');
  // }
  return (
    <>
        <div className='links'>
          <Link to={"/"}>Home</Link>
          <Link to={"/counter"}>use State</Link>
          <Link to={"/rickapi"}>Rick</Link>

          <button onClick={handleOn} className="switch" id="switch">
            <span>
              <i className="fa-solid fa-sun"></i>
              <i className="fa-solid fa-moon"></i>
            </span>
				  </button>
        </div>
    </>
  )
}
