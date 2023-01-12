import React from 'react';
import './footer.css';
import {SiLinkedin} from 'react-icons/si';
import {FiGithub} from 'react-icons/fi';
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/andrew-vazquez-4079bb63/' target="_blank"><SiLinkedin/></a>
        <a href='https://github.com/drewrvaz' target="_blank"><FiGithub/></a>
        <a href='https://stackoverflow.com/?newreg=c1e033ee5eb34825867ac18a38fd409b' target="_blank"><BsStackOverflow/></a>
      </div>
    </footer>
  )
}

export default Footer