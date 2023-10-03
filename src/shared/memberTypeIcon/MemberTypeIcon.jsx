import React from 'react'

import './memberTypeIcon.css'

export default function MemberTypeIcon({ memberType }) {
    const memberTypeDetails = {
        pro: {
            text: 'Pro Member',
            backgroundColor: '#5D5CF5',
            color: '#FFFFFF'
        }
    }

    const member = memberTypeDetails[memberType]

    return (
        <div className='memberTypeIcon' style={{ backgroundColor: `${member?.backgroundColor}`, color: `${member?.color}` }}>
            <h3 className='memberTypeIcon__text'>{member?.text}</h3>
        </div>
    )
}