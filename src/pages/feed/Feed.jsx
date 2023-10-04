//External
import React, { useState } from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

//Libs
import './feed.css'
import NewestMembers from '../../components/newestMembers/newestMembers'
import PopularGroups from '../../components/popularGroups/popularGroups'
import AchievementCard from '../../components/achievementCard/achievementCard'
import Updates from '../../components/updates/updates'
import useIsMobile from '../../shared/hooks/useIsMobile'



function Feed() {
    const isMobile = useIsMobile()
    const [activeColumn, setActiveColumn] = useState('updates')
    return (
        <div className='newsfeed'>
            <main className='newsfeed__container'>
                <div className='newsfeed__banner'>
                    <img src='./newsfeed.jpeg' className='newsfeed__bannerImg' alt='newsfeed banner'></img>
                    <motion.div className='newsfeed__text' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1 }}>
                        <h3 className='newsfeed__title'>Newsfeed</h3>
                        <p className='newsfeed__description'>Check what your friends have been up to!</p>
                    </motion.div>
                </div>
                <div className='newsfeed__columnContainer'>
                    {(!isMobile || (activeColumn === 'newestMembers')) &&

                        <motion.div className='newsfeed__sideColumns' initial={{ opacity: 0, y: `${isMobile ? 0 : 3250}` }} animate={{ opacity: 1, y: 0 }} transition={{ duration: `${isMobile ? 0.3 : 1.2}`, stiffness: 150 }}>

                            <NewestMembers />
                            <AchievementCard heading={'Quests'} title={'Posting Machine'} description={'Posted more than 20 profile activities in one day'} image={'https://plus.unsplash.com/premium_photo-1675543163354-e4dc1f541330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JleSUyMGdlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'} />

                        </motion.div>
                    }
                    {((!isMobile) || (activeColumn === 'updates')) &&
                        <motion.div className='newsfeed__updates' initial={{ opacity: 0, y: `${isMobile ? 0 : 3250}` }} animate={{ opacity: 1, y: 0 }} transition={{ duration: `${isMobile ? 0.3 : 1.2}`, stiffness: 150 }}>
                            <Updates />
                        </motion.div>
                    }{
                        ((!isMobile) || (activeColumn === 'popular')) &&
                        <motion.div className='newsfeed__sideColumns' initial={{ opacity: 0, y: `${isMobile ? 0 : 3250}` }} animate={{ opacity: 1, y: 0 }} transition={{ duration: `${isMobile ? 0.3 : 1.2}`, stiffness: 150 }}>
                            <PopularGroups />
                            <AchievementCard heading={'Badges'} title={'Globe Trotter'} description={'Has joined at least 10 different groups'} image={'https://plus.unsplash.com/premium_photo-1664304093466-3b4791d8ad6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGdlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'} />
                        </motion.div>
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

export default Feed
