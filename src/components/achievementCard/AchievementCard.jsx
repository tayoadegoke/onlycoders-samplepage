import React from 'react'
import ListItem from '../../shared/listItem/ListItem'


function AchievementCard({ heading, title, description }) {
    return (
        <div className='columnSection'>
            <h3 className='columnSection__title'>{heading}</h3>
            <ListItem title={title} description={description} />
        </div>

    )
}

export default AchievementCard
