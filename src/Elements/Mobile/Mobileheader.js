import React from 'react'
import "../../Css/Mobileheader.css";

const Mobileheader = () => {
  return (
    <div className='mobileheader'>
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Mobileheader