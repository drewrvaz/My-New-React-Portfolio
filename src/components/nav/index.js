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
      <a href='/'><BiHomeAlt/></a>
      <a href='/about'><FiUser/></a>
      <a href='/experience'><BiBook/></a>
      <a href='/portfolio'><MdWorkOutline/></a>
      <a href='/contact'><AiOutlineMessage/></a>
    </nav>  
  )
}

export default Nav