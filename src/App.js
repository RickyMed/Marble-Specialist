import React from 'react';
import './App.scss';

import Header from './Header/Header';
import Menu from './Menu/Menu';
import Locations from './Locations/Locations';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Locations></Locations>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
