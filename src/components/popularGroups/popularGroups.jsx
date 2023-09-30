import React from 'react'
import './popularGroups.css'
import ListItem from '../../shared/listItem/ListItem'

function PopularGroups() {

    const groups = [
        {
            name: 'Street Artistes',
            members: 4,
            isPrivate: true,
        },
        {
            name: 'Cosplayers of the world',
            members: 3,
            isPrivate: false,
        },
        {
            name: 'Stream Designers',
            memebers: 3,
            isPrivate: false,

        },
        {
            name: 'Gaming Watchtower',
            members: 3,
            isPrivate: true,


        },
        {
            name: 'Living in Japan',
            members: 2,
            isPrivate: false,


        },
    ]
    return (
        <div className='columnSection'>
            <h3 className='columnSection__title'>Popular Groups</h3>
            {groups.map((group, index) => {
                return (
                    <ListItem title={group.name} description={`${group.members} members`} key={index} />
                )
            })
            }


        </div>
    )
}

export default PopularGroups
