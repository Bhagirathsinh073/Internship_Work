import React from 'react'

import styles from './Navbar.module.css' // import your CSS module
import logo from '../Image/logo.png' //
import '../Componet/Navbar.css'

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <div className={styles.navbarMaintainers}>
        <div className='p1'>
            <div className='logo'>
                <img src={logo} alt='nothing'></img>
            </div>
        </div>
        <div className="p2">
            <ul>
                <li>Home</li>
                <li>Find Job</li>
                <li>Employer</li>
                <li>Admin</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='p3'>
            <button>Contact us</button>
            <button>About us</button>
        </div>
      </div>
    </div>
  )
}
