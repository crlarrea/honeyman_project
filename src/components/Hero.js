import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <section className='hero'>
      <article>
        <span>coucou! i'm aidan</span>
        <h1>
          french to english<br/>
          <span>legal translator</span>
        </h1>
        <h2>overcoming language barriers</h2>
        <p>Accurate and clear translation of texts from French to English.</p>
        <ul>
          <li>
            <a
              href='https://www.proz.com/translator/2802161'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                height='37'
                viewBox='0 0 37 37'
                width='21'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fill-rule='evenodd' transform='translate(1 1)'>
                  <circle
                    cx='17.5'
                    cy='17.5'
                    fill='#1d3557'
                    r='17.5'
                    stroke='#fff'
                  ></circle>
                  <path
                    d='m10.5107827 23.5454545v-12.090909h14.6363637s3.5.9545454 3.5 4.4545454-3.5 3.8181818-3.5 3.8181818h-18.78351004'
                    stroke='#fff'
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/aidan-honeyman-45b430158/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href='mailto:info@honeyman.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </li>
        </ul>
      </article>
      <article>
      <img src={require('../assets/img/aidan.png')} alt="aidan honeyman"/>
      </article>
    </section>
  );
};
