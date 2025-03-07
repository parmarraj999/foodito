import React from 'react'
import "./dishes.css"

function Dishes() {
    return (
        <div className='dishes_container' >
            <div className='dish-card' >
                <img src='../../../../images/chicken.png' />
                <div className='dish-detail' >
                    <h1>Baked <br/>chicken</h1>
                    <h2>$18.99</h2>
                </div>
            </div>
            <div className='dish-card' >
                <img src='../../../../images/ball.png' />
                <div className='dish-detail' >
                    <h1>Healthy <br/>balls</h1>
                    <h2>$12.99</h2>
                </div>
            </div>
        </div>
    )
}

export default Dishes