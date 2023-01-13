import React from 'react';
import './experience.css';
import Resume from '../../assets/AndrewVazquezResume.pdf';
import {AiOutlineCheckCircle} from 'react-icons/ai';
// import Header from '../header/index';

const Experience = () => {
  return (
    <>
      {/* <Header /> */}
      <section id='experience'>
        <h5>Langauges/Skills</h5>
        <h2>My Experience</h2>

        <div className='container experience-container'>
          <div className='frontend-exp'>
            <h3>Frontend Development</h3>
            <div className='experience-content'>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>Bulma</h4>
                <small className='text-light'>Basic</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
          </div>
          <div className='backend-exp'>
          <h3>Back Development</h3>
            <div className='experience-content'>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience-details'>
                <AiOutlineCheckCircle/>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </article>
            </div>
          </div>
        </div>
        <div className='downloadResume'>
          <a href={Resume} download className='btn'>Download Resume</a>
        </div>
      </section>
    </>
  )
}

export default Experience