import React from 'react';
import './App.css';
import Home from './sections/home/home';
import Favourite from './sections/favourite/favourite';
import Dishes from './sections/dishes/dishes';
import Different from './sections/different/different';
import Pizza from './sections/pizza/pizza';
import Instagram from './sections/instagram-section/instagram';
import Call from './sections/call-section/call';
import Footer from './sections/footer/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Favourite/>
      <Dishes/>
      <Different/>
      <Pizza/>
      <Instagram/>
      <Call/>
      <Footer/>
    </div>
  );
}

export default App;
