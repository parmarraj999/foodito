import React from 'react'
import './instagram.css'

function Instagram() {
  return (
    <div className='instagram-section' >
        <div className='instagram-wrapper' >
            <div className='card' >
                <div className='card-header'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src='../../../../images/instagram-img1.png' />
                <div className='card-details' >
                    <h2>Healthy Chickens</h2>
                    <p>$22.00</p>
                </div>
            </div>
           
            <div className='card' >
                <div className='card-header'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src='../../../../images/instagram-img2.jpeg' />
                <div className='card-details' >
                    <h2>Vegan Salad</h2>
                    <p>$18.20</p>
                </div>
            </div>
           
            <div className='card' >
                <div className='card-header'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src='../../../../images/instagram-img3.png' />
                <div className='card-details' >
                    <h2>Ittalian Pizza</h2>
                    <p>$12.75</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Instagram