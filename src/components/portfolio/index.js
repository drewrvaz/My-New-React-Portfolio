import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/password_generator.jpeg';
import IMG2 from '../../assets/klaw_movies.jpeg';
import IMG3 from '../../assets/weather_app.jpeg';
// import IMG4 from '../../assets/';
import IMG5 from '../../assets/v982-d4-01.jpg';
// import IMG6 from '../../assets/';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG1} alt='Screenshot of the live random password generator'/>
          </div>
          <h3>Password Generator</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/drewrvaz/Password-Generator' className='btn' target='_'>GitHub</a>
            <a href='https://drewrvaz.github.io/Password-Generator/' className='btn btn-primary' target='_'>Live Site</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG5} alt='Social netowrk icons'/>
          </div>
          <h3>Social Network API</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/drewrvaz/Social-Network-API' className='btn' target='_'>GitHub</a>
            <a href='https://insomnia.rest/' className='btn btn-primary' target='_'>Use Insomnia to Test</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG2} alt='Screenshot of the live weather app'/>
          </div>
          <h3>Weather App</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/drewrvaz/what-is-the-weather' className='btn' target='_'>GitHub</a>
            <a href='https://drewrvaz.github.io/what-is-the-weather/' className='btn btn-primary' target='_'>Live Site</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG3} alt='Screenshot of the live movie app'/>
          </div>
          <h3>KLAW Movies</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/Laurencvengros/KLAW_Movies' className='btn' target='_'>GitHub</a>
            <a href='https://laurencvengros.github.io/KLAW_Movies/' className='btn btn-primary' target='_'>Live Site</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            {/*<img src={IMG4} alt='Screenshot of the live password manager'/>*/}
          </div>
          <h3>Password Manager</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/drewrvaz/password_manager' className='btn' target='_'>GitHub</a>
            <a href='https://drewrvaz.github.io/Password-Generator/' className='btn btn-primary' target='_'>Live Site</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-image'>
            {/*<img src={IMG6} alt='Screenshot of the live random password generator'/>*/}
          </div>
          <h3>E-Commerce Backend</h3>
          <div className='portfolio-item-links'>
            <a href='https://github.com/drewrvaz/E-Commerce-Back-End' className='btn' target='_'>GitHub</a>
            <a href='https://insomnia.rest/' className='btn btn-primary' target='_'>Use Insomnia to Test</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio