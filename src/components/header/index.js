import React from 'react';
import './header.css'
import CallToAction from './callToAction';

const Header = () => {
  return (
    <header>
      <div className="container.header-container">
        <h3>Hello I'm</h3>
        <h1>Andrew Vazquez</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
        <CallToAction/>
      </div>
    </header>
  )
}

export default Header;
