//External
import React, { useState } from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

//Libs
import './newsFeed.css'
import NewestMembers from '../../components/newestMembers/NewestMembers'
import PopularGroups from '../../components/popularGroups/PopularGroups'
import AchievementCard from '../../components/achievementCard/AchievementCard'
import Updates from '../../components/updates/Updates'
import useIsMobile from '../../shared/hooks/useIsMobile'



function NewsFeed() {
    const isMobile = useIsMobile()
    const [activeColumn, setActiveColumn] = useState('updates')
    return (
        <div className='newsfeed'>
            <main className='newsfeed__container'>
                <div className='newsfeed__banner'>
                    <img src='./newsfeed.jpeg' className='newsfeed__bannerImg' alt='newsfeed banner'></img>
                    <div className='newsfeed__text'>
                        <h3 className='newsfeed__title'>Newsfeed</h3>
                        <p className='newsfeed__description'>Check what your friends have been up to!</p>
                    </div>
                </div>
                <div className='newsfeed__columnContainer'>
                    {(!isMobile || (activeColumn === 'newestMembers')) &&

                        <div className='newsfeed__sideColumns'>

                            <NewestMembers />
                            <AchievementCard heading={'Quests'} title={'Posting Machine'} description={'Posted more than 20 profile activities in one day'} image={'https://plus.unsplash.com/premium_photo-1675543163354-e4dc1f541330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JleSUyMGdlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'} />

                        </div>
                    }
                    {((!isMobile) || (activeColumn === 'updates')) &&
                        <div className='newsfeed__updates'>
                            <Updates />
                        </div>
                    }{
                        ((!isMobile) || (activeColumn === 'popular')) &&
                        <div className='newsfeed__sideColumns'>
                            <PopularGroups />
                            <AchievementCard heading={'Badges'} title={'Globe Trotter'} description={'Has joined at least 10 different groups'} image={'https://plus.unsplash.com/premium_photo-1664304093466-3b4791d8ad6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGdlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'} />
                        </div>
                    }


                </div>
                {isMobile &&
                    <div className='newsfeed__mobileControlContainer'>
                        <p onClick={() => setActiveColumn('newestMembers')} className={`newsfeed__mobileControl ${activeColumn === 'newestMembers' ? 'newsfeed__mobileControl--active' : null}`}><FontAwesomeIcon icon={faUsers} /></p>
                        <p onClick={() => setActiveColumn('updates')} className={`newsfeed__mobileControl ${activeColumn === 'updates' ? 'newsfeed__mobileControl--active' : null}`}><FontAwesomeIcon icon={faBolt} /></p>
                        <p onClick={() => setActiveColumn('popular')} className={`newsfeed__mobileControl ${activeColumn === 'popular' ? 'newsfeed__mobileControl--active' : null}`}><FontAwesomeIcon icon={faFire} /></p>
                    </div>
                }

            </main>
        </div>
    )
}

export default NewsFeed
