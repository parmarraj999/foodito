import React from 'react'
import Nav from '../nav/nav'
import './home.css';

function Home() {
  return (
    <div className="home-container" > 
        <Nav/>
        <div className="home-wrapper" >
          <h1>Delicious</h1>
          <h1>Organic</h1>
          <h1>foods</h1>
        </div>
        <img src="../../../../images/shape.png" className="image-one"/>
        <img src="../../../../images/shape.png" className="image-two"/>
    </div>
  )
}

export default Home