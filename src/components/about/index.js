import React from 'react';
import './about.css';
import ME from '../../assets/DSC_0136.JPG';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineProject} from 'react-icons/ai';
// import Header from '../header/index';

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <section id='about'>
        <h2>Get To Know Me</h2>

        <div className='containter about-container'>
          <div className='about-me'>
            <div className='about-me-picture'>
              <img src={ME} alt='A picutre of me'/>
            </div>
          </div>
          <div className='about-content'>        
            <div className='about-cards'>
              <article className='about-card'>
                <BiTimeFive/>
                <h2>Experience</h2>
                <h5>1 Year Working</h5>
              </article>
              <article className='about-card'>
                <AiOutlineProject/>
                <h2>Projects</h2>
                <h5>20 Completed Projects</h5>
              </article>
            </div>
            <p>
            A results driven Fullstack Web Developer leveraging experience in education to create applications better suited for users of all kinds. Earned a Full Stack Web Development certificate from the Michigan State Coding Boot Camp. Passionate about creating applications that users of all abilities and ages can interact with easily.
            </p>
            <a href='/contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About