import React, { useState } from 'react'
import { faWallet, faBasketShopping, faMedal, faTv } from '@fortawesome/free-solid-svg-icons'
import { faUser, faUserCircle, faStar, faMessage, faBuilding, faGem, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './sideNavigation.css'


function SideNavigation() {

    const [activeLi, setActiveLi] = useState(null)


    /* regular icons are not available for all icons , that is why solid ones were used*/
    const sideNavItems = [
        <FontAwesomeIcon icon={faTv} />,
        <FontAwesomeIcon icon={faUser} />,
        <FontAwesomeIcon icon={faUserCircle} />,
        <FontAwesomeIcon icon={faMedal} />,
        <FontAwesomeIcon icon={faStar} />,
        <FontAwesomeIcon icon={faBuilding} />,
        <FontAwesomeIcon icon={faGem} />,
        <FontAwesomeIcon icon={faCalendar} />,
        <FontAwesomeIcon icon={faMessage} />,
        <FontAwesomeIcon icon={faBasketShopping} />,
        <FontAwesomeIcon icon={faWallet} />
    ]

    const appendActiveClass = (id) => {
        const listItem = document.getElementById(id)
        const previousListItem = document.getElementById(activeLi)
        previousListItem?.classList.remove('sidenav__li--active')
        listItem.classList.add('sidenav__li--active')
        setActiveLi(id)
    }


    return (
        <ul className='sidenav'>
            {sideNavItems.map((item, index) =>
                <li key={index} className={`sidenav__li ${!activeLi && index === 0 && 'sidenav__li--active'}`} id={`nav-li${index}`} onClick={(e) => appendActiveClass(`nav-li${index}`)}>{item}</li>
            )
            }

        </ul>
    )
}

export default SideNavigation
