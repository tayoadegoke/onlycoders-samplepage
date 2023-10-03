import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Logo from '../../assets/Logo';
import Filter from '../../assets/Filter';

import './navigation.css'

function Navigation() {
    return (
        <nav className='nav'>
            <div className='nav__section'>
                <div className='nav__logoContainer'>
                    <div className='nav__logo'>
                        <Logo />
                    </div>
                    <h3 className='nav_logoContainerText'>SAMPLE PAGE</h3>
                    <Filter />
                </div>
                <ul className='nav__list'>
                    <li>Home  </li>
                    <li>Features <span><FontAwesomeIcon icon={faAngleDown} /></span></li>
                    <li>More <span><FontAwesomeIcon icon={faAngleDown} /></span></li>

                </ul>
            </div>

            <div className='nav__search'>
                <div className='nav__search__input'>
                    <input placeholder='Enter your search here...'></input>
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                </div>


            </div>

            <button className='nav__button'>Login</button>

        </nav>
    )
}

export default Navigation
