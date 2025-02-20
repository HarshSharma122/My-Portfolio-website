import React from 'react'
import './navbar.css'
import upwork from '../../assets/upwork.png'
import fiver from '../../assets/freelancer.svg'
import barsIcon from '../../assets/menu-bar.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <div className='header-01'>
      <div className="navbar">
        <li><AnchorLink offset={50} href='#about'><a>About</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#skill'><a>Skill</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#service'><a>Services</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#education'><a>Education</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#work'><a>Work</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#work'><a>Dsa Problem</a></AnchorLink></li>
        <li><AnchorLink offset={50} href='#contact'><a>Contact Me</a></AnchorLink></li>
      </div>

      <div className='Approch_sec'>
        <button className='button' id='button'><img src={upwork} alt="" />Upwork</button>
        <button className='button' id='button'><img src={fiver} alt="" />Freelancer</button>
      </div>
    </div>
  )
}

export default Navbar
