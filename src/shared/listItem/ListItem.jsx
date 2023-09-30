import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './listItem.css'

function ListItem({ title, description, isVerified = false, isHandle = false }) {
    return (
        <div className='listItem'>
            {/*icon*/}

            <div className='listItem__description'>
                <h3 className='listItem__description__title'>{title} <span>{isVerified && <FontAwesomeIcon icon={faCircleCheck} color='#05A2EE' />}</span></h3>
                <p className='listItem__description__handle'>{isHandle && '@'}{`${description}`}</p>
            </div>

        </div>
    )
}

export default ListItem
