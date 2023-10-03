import React from 'react'

import ListItem from '../../shared/listItem/ListItem'
import './achievement.css'

function AchievementCard({ heading, title, description, image }) {
    return (
        <div className='columnSection'>
            <div className='achievement'>
                <h3 className='columnSection__title'>{heading}</h3>
                <ListItem title={title} description={description} image={image} />
            </div>
        </div>

    )
}

export default AchievementCard
