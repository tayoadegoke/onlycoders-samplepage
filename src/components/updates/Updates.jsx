import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import ListItemIcon from '../../shared/listItemIcon/ListItemIcon'
import MemberTypeIcon from '../../shared/memberTypeIcon/MemberTypeIcon'
import { updates } from '../../mocks'

import './updates.css'


function UpdatesFilter() {
    return (

        <div className='filterContainer'>
            <h3 className='filterContainer__title'>All Updates</h3>
            <div className='filterContainer__inputContainer'>
                <label className='filterContainer__inputLabel'>Show</label>
                <select className='filterContainer__input'>
                    <option>Everything</option>
                </select>
            </div>



        </div>
    )
}


function UpdatesCard({ user, update, index }) {

    const reactionToUnicode = {
        laugh: '\uD83D\uDE00',
        like: '\uD83D\uDC97'
    }


    const splitReplyString = () => {

        let firstPart = ''
        let secondPart = ''
        const stringClassName = 'listItem__description__title updateDescription__title'
        const stringArray = update.topic?.split(' ')

        stringArray?.forEach((str, index) => {
            if (index <= 1) firstPart += `${str} `
            else secondPart += `${str} `

        })



        if (update.topic?.split(' ').length <= 2) {
            return <h3 className={stringClassName}>{update.topic}</h3>
        } else {
            return (
                <>
                    <h3 className={stringClassName}>{firstPart}</h3>
                    <h3 className={stringClassName}>{secondPart}</h3>
                </>
            )
        }
    }

    splitReplyString()

    return (
        <div className='updatesCard'>
            <div className='updatesCard__section updateDescription'>
                <ListItemIcon isUserIcon userScore={user.score} image={user.avatar} />
                <div className='updateContainer'>
                    <div className='update'>

                        <h3 className='listItem__description__title updateDescription__title'>{user.name} <span>{user.isVerified && <FontAwesomeIcon icon={faCircleCheck} color='#05A2EE' />}</span></h3>
                        <MemberTypeIcon memberType={user.status} />
                        <p className='updateDescription__action' >{update.type}</p>
                        {update.type === "replied to the topic" &&

                            splitReplyString(update.topic)

                        }
                        {update.forum &&
                            <>
                                <p className='updateDescription__action'>in the forum </p>
                                <h3 className='listItem__description__title updateDescription__title'>{update.forum}</h3>
                            </>
                        }

                    </div>
                    <p className='update__time'>{update.datePosted}</p>
                </div>

            </div>
            <div className='updatesCard__section updateMessage'>
                {update.content && update.content.startsWith('http') ?
                    <a href={update.content} target="_blank" rel="noreferrer"><p>{update.content}</p></a>
                    :
                    <p>{update.content}</p>
                }
                {update.image &&

                    <img src={update.image} alt={update.content} className='updateMessage__image' />
                }

            </div>
            <div className='updatesCard__section updateMessageExtras'>


                <p className='emoji'><span id={`emoji-${index}`}>{reactionToUnicode[update.reactions[0].type]}</span><span className='emoji__count'>{update.reactions[0].count}</span></p>

                <div className='updateStats'>
                    <p>{update.comments} Comments</p>
                    <p> {update.shares} Shares</p>
                </div>
            </div>

        </div>
    )
}


export default function Updates() {
    return (
        <div>
            <div className='columnSection columnSection--noPaddingBottom'>
                <UpdatesFilter />
            </div>

            {updates.map((update, index) => {
                return (
                    <div className='columnSection' key={index}>
                        <UpdatesCard user={update.user} update={update.update} index={index} />
                    </div>
                )
            })}



        </div>

    )
}


