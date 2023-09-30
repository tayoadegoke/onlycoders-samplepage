import React from 'react'
import ListItem from '../../shared/listItem/ListItem'

function NewestMembers() {

    const newestMembers = [
        {
            name: 'Sandra Strange',
            handle: 'sanstrange',
            isVerified: true,
            points: 1
        },
        {
            name: 'Rosie Sakura',
            handle: 'sakurara',
            isVerified: false,
            points: 4
        },
        {
            name: 'Damian Greyson',
            handle: 'dgreyson',
            isVerified: false,
            points: 1,

        },
        {
            name: 'The Green Goo',
            handle: 'dgreyson',
            isVerified: false,
            points: 1,

        },
        {
            name: 'Bearded Wonder',
            handle: 'brdwonder',
            isVerified: false,
            points: 1,

        },
    ]
    return (
        <div className='columnSection'>
            <h3 className='columnSection__title'>Newest Members</h3>
            {newestMembers.map((member, index) => {
                return (
                    <ListItem title={member.name} description={member.handle} isHandle isVerified={member.isVerified} key={index} />
                )
            })
            }


        </div>
    )
}

export default NewestMembers
