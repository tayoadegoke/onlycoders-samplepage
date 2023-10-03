import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faGlobe } from '@fortawesome/free-solid-svg-icons'

import ListItem from '../../shared/listItem/ListItem'
import { groups } from '../../mocks'
import './popularGroups.css'




function PopularGroups() {


    return (
        <div className='columnSection'>
            <h3 className='columnSection__title'>Popular Groups</h3>
            {groups.map((group, index) => {
                return (
                    <div className='popularGroup' key={index}>
                        <ListItem title={group.name} description={`${group.members} members`} key={index} image={group.image} />
                        <span className='popularGroup__icon' ><FontAwesomeIcon icon={group.isPrivate ? faLock : faGlobe} /></span>
                    </div>
                )
            })
            }


        </div>
    )
}

export default PopularGroups
