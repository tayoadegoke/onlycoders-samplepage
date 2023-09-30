//External
import React from 'react'

//Libs
import './newsFeed.css'
import NewestMembers from '../../components/newestMembers/newestMembers'
import PopularGroups from '../../components/popularGroups/popularGroups'
import AchievementCard from '../../components/achievementCard/AchievementCard'

function NewsFeed() {
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

                    <div>
                        <NewestMembers />
                        <AchievementCard heading={'Quest'} title={'Posting Machine'} description={'Posted more than 20 profile activities in one day'} />
                    </div>

                    <div className='newsfeed__leftColumn'>
                        <h3>Updates</h3>
                    </div>
                    <div>
                        <PopularGroups />
                        <AchievementCard heading={'Badges'} title={'Globe trotter'} description={'Has joined at least 10 different groups'} />
                    </div>
                </div>

            </main>
        </div>
    )
}

export default NewsFeed
