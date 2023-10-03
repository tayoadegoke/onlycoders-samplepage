import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './listItem.css'
import ListItemIcon from '../listItemIcon/ListItemIcon'

function ListItem({ title, description, isVerified = false, isUserIcon = false, userScore, image }) {
    return (
        <div className='listItem'>

            <ListItemIcon isUserIcon={isUserIcon} userScore={userScore} image={image} />

            <div className='listItem__description'>
                <h3 className='listItem__description__title'>{title} <span>{isVerified && <FontAwesomeIcon icon={faCircleCheck} color='#05A2EE' />}</span></h3>
                <p className='listItem__description__handle'>{isUserIcon && '@'}{`${description}`}</p>
            </div>

        </div>
    )
}

export default ListItem
