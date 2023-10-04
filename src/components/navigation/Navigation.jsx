import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import Logo from '../../assets/Logo'
import Filter from '../../assets/Filter';
import useIsMobile from '../../shared/hooks/useIsMobile';

import './navigation.css'

function NavList({ isMobile }) {
    return (
        <ul className={`nav__list  ${isMobile ? 'nav__list--mobile' : ''}`}>
            <li className='nav__listItem'>Home  </li>
            <li className='nav__listItem'>Features <span><FontAwesomeIcon icon={faAngleDown} /></span></li>
            <li className='nav__listItem'>More <span><FontAwesomeIcon icon={faAngleDown} /></span></li>

        </ul>
    )
}
function Navigation() {
    const isMobile = useIsMobile()
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 600
    const [navOpen, setNavOpen] = useState(false)
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: 20000, display: 'none' },
    }


    return (
        <nav className='nav'>
            <div className='nav__section'>
                <div className='nav__logoContainer'>
                    <div className='nav__logo'>
                        <Logo />
                    </div>
                    <motion.h3 className='nav_logoContainerText' initial={{ y: -250 }}
                        animate={{ y: 0 }} transition={{ duration: 0.5 }} >SAMPLE PAGE</motion.h3>
                    {!isTablet && <Filter />}
                </div>
                <NavList />
            </div>

            <div className='nav__search'>
                <div className='nav__search__input'>
                    <input placeholder='Enter your search here...'></input>
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                </div>


            </div>

            <button className='nav__button'>Login</button>
            {(isMobile || isTablet) &&
                <>

                    <FontAwesomeIcon icon={navOpen ? faClose : faBars} className='nav_burger' onClick={() => setNavOpen(!navOpen)} />


                    <motion.div className='nav__mobile' animate={navOpen ? "open" : "closed"} variants={variants} transition={{ stiffness: 0, duration: 0.3 }}>
                        <NavList isMobile={isMobile || isTablet} />
                        <button className='nav__button nav__button--mobile'>Login</button>
                    </motion.div>
                </>
            }
        </nav>
    )
}

export default Navigation
