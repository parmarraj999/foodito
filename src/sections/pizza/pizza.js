import React from 'react'
import './pizza.css'

function Pizza() {
  return (
    <div className='pizza_container' >
      <div className='pizza-content' >
        <div className='badge'>New</div>
        <div>
          <h1>pizza slices</h1>
          <p>Choose how many slices you want!</p>
        </div>
        <div className='pizza-size-list'>
            <li>Large</li>
            <li>Medium</li>
            <li>Small</li>
            <li>Custome</li>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <img src='../../../../images/pizza.png' />
      </div>
    </div>
  )
}

export default Pizza