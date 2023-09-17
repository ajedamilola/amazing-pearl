import React, {useState} from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
// import {motion} from 'framer-motion'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [color, setColor] = useState(false)
  const [nav, setNav] = useState(null)
  const togglenav = (i) =>{
    if (nav === i){
      return setNav(null)
    }
    setNav(i)
  }
	const changeColor = () => {
		if (window.scrollY >= 500) {
			setColor(true)
		} else {
			setColor(false)
		}
	}
	window.addEventListener ('scroll', changeColor)
  return (
    <div className={color ? 'navbar navbarbg' : 'navbar'} id={nav === 1 ? 'nav'  : ''}>
        <div className="hat">
            <p>Looking for Amazing Pearl Assistance? You are in the right place! <NavLink id='search' to={'/care'}>Search for your local office</NavLink></p>
        </div>
        <nav>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <NavLink to={'/'} className='link' style={{display: 'flex', alignItems: 'center'}}>
                  <img src={logo} alt="Amazing Pearl Logo" />
                </NavLink>

              <div className="menuvis">
                
                  <CloseIcon className={nav === 1 ? 'menu' : 'menu none'} onClick={() => togglenav(null)} />
              </div>
              <div className="menuvis">
                  <MenuRoundedIcon className={nav === 1 ? 'menu none' : 'menu'} onClick={() => togglenav(1)}/>
              </div>
            </div>
            
            <ul className={nav === 1 ? 'visible' : 'notvisible'} >
                <li><NavLink to={'/join'} className='navlinks link'>Join</NavLink></li>
                <li><NavLink to={'/services'} className='navlinks link'>Services</NavLink></li>
                <li><NavLink to={'/contact'} className='navlinks link'>Contact Us</NavLink></li>
                <li><NavLink to={'/care'} className='navlinks link'>Find Care</NavLink></li>
                <li><NavLink to={'/job'} className='navlinks link'>Find job</NavLink></li>
                <li><NavLink to={'/articles'} className='navlinks link'>Articles</NavLink></li>
                <li><NavLink to={'/about'} className='navlinks link'>About Us</NavLink></li>
                <li><NavLink to={'/'} className='navlinks link dail'>+12409357172</NavLink></li>
            </ul>
            
        </nav>
        
    </div>
  )
}

export default Navbar