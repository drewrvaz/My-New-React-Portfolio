import React from 'react';
import Resume from '../../assets/AndrewVazquezResume.pdf';

const CallToAction = () => {
  return (
    <div className='callToAction'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href='/about' className='btn btn-primary'>About Me</a>
      <a href='/experience' className='btn'>Experience</a>
      <a href='/portfolio' className='btn btn-primary'>Portfolio</a>
      <a href='/contact' className='btn'>Let's Talk!</a>
    </div>
  )
}

export default CallToAction;