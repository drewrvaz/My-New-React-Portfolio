import React from 'react';
import './header.css'
import CallToAction from './callToAction';
// import HeaderSocials from './headerSocials';
// import ME from '../../assets/DSC_0137.JPG';


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

// <HeaderSocials/>
{/* <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll-to-contact'><h4>Scroll to Contact</h4></a> */}