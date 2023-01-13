import React from 'react';
import Resume from '../../assets/AndrewVazquezResume.pdf';

const CallToAction = () => {
  return (
    <div className='callToAction'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='https://drewrvaz.github.io/My-New-React-Portfolio/about' className='btn btn-primary'>About Me</a>
        <a href='https://drewrvaz.github.io/My-New-React-Portfolio/experience' className='btn'>Experience</a>
        <a href='https://drewrvaz.github.io/My-New-React-Portfolio/portfolio' className='btn btn-primary'>Portfolio</a>
        <a href='https://drewrvaz.github.io/My-New-React-Portfolio/contact' className='btn'>Let's Talk!</a>
      </div>
  )
}

export default CallToAction;