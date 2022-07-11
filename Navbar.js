import React, {useState} from 'react'
import Logo from '../src/pages/images/ug.png'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"



 
const Navbar = () => {
    const[click, setClick] = useState(false)
    //const handleClick = () => setClick(!click)
    //const[isMobile,setIsMobile] = useState(false);
    
    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt=''/></Link>
                </div>
                <ul className={click ? "nav-menu active": 'nav-menu'}>
                    <li className='nav-item'>
                         <Link to='/'  className='nav-link'>HOME
                         <FontAwesomeIcon icon={faHome} className="fa-icon" transform="up-25 left-33" size="1x" color="rgb(255, 152, 7)"/>
                         </Link>
                        </li>
                    <li className='nav-item' >
                        <Link to='/content'  className='nav-link'>CONTENT
                        <FontAwesomeIcon icon={faVideo} transform="up-25 left-43" size="1x" color="rgb(249, 137, 25)"/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/upload' className='nav-link'>UPLOAD
                        <FontAwesomeIcon icon={faUpload} transform="up-26 left-40" size="1x" color="rgb(255, 152, 7)"/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/bank' className='nav-link'>BANK
                        <FontAwesomeIcon icon={faMoneyBill} transform="up-24 left-30"  size="1x" color="rgb(255, 152, 7)"/>
                        </Link>
                    </li>
                </ul>
                <Link to="/signin">
                    <button class="button-8" role="button">SIGN-IN</button>
                    </Link>
            </nav> 
        </header>
    )
}

export default Navbar;