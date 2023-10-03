import React from 'react'

import './listItemIcon.css'

function ListItemIcon({ isUserIcon = false, userScore, image }) {
    /*converts the score to a gradient style for the hexagon*/

    function getGradientStyle(score) {
        const scoreToGradient = {
            1: 'linear-gradient(210deg, #4770F6 20%,lightgrey 21%)',
            2: 'linear-gradient(235deg, #4770F6 30%,lightgrey 21%)',
            3: 'linear-gradient(270deg, #4770F6 50%,lightgrey 21%)',
            4: 'conic-gradient(#4770F6 50%,#00CBFB 50% 68% , lightgrey 68% 100%)',
            5: 'conic-gradient(#4770F6 50%,#00CBFB 50% 82.5% , lightgrey 82.5% 100%)',
            6: 'linear-gradient(270deg, #4770F6 50%, #00CBFB 50% 100%)',

        }

        return (
            scoreToGradient[score]
        )
    }

    return (
        <div className='listItemIconContainer'>
            <div className='listItemIcon' style={!isUserIcon ? { clipPath: 'none', backgroundImage: 'none' } : { backgroundImage: getGradientStyle(userScore) }}>
                <div className='listItemIcon__gap' style={!isUserIcon ? { clipPath: 'none', backgroundImage: 'none' } : undefined}>
                    <div className='listItemIcon__imgContainer' style={!isUserIcon ? { width: '27px', height: '32px' } : undefined}>
                        <img src={image} alt="list item icon" className='listItemIcon__img' />

                    </div>

                </div>

            </div>
            {isUserIcon &&
                <div className='listItemIcon__scoreIcon'>
                    <h2>{userScore}</h2>
                </div>
            }
        </div>
    )
}

export default ListItemIcon
