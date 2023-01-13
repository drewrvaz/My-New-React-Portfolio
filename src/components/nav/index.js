import React from 'react';
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <a href='https://drewrvaz.github.io//My-New-React-Portfolio'><BiHomeAlt/></a>
      <a href='https://drewrvaz.github.io//My-New-React-Portfolio/about'><FiUser/></a>
      <a href='https://drewrvaz.github.io//My-New-React-Portfolio/experience'><BiBook/></a>
      <a href='https://drewrvaz.github.io//My-New-React-Portfolio/portfolio'><MdWorkOutline/></a>
      <a href='https://drewrvaz.github.io//My-New-React-Portfolio/contact'><AiOutlineMessage/></a>
    </nav>  
  )
}

export default Nav