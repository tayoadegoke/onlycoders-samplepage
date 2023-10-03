import React from 'react'

import ListItem from '../../shared/listItem/ListItem'
import { newestMembers } from '../../mocks'

function NewestMembers() {


    return (
        <div className='columnSection'>
            <h3 className='columnSection__title'>Newest Members</h3>
            {newestMembers.map((member, index) => {
                return (
                    <ListItem title={member.name} description={member.handle} isUserIcon isVerified={member.isVerified} key={index} userScore={member.score} image={member.image} />
                )
            })
            }


        </div>
    )
}

export default NewestMembers
