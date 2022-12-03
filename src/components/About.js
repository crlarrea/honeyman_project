import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export const About = () => {
  return (
    <section class='about' id='about'>
      <article>
        <img src={require('../assets/img/aidan.png')} alt='aidan honeyman' />
      </article>
      <article>
        <h2>about me</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem error sequi quae, qui excepturi beatae distinctio.
          Itaque expedita a, ipsa provident neque magni maxime nobis
          perferendis. Natus beatae quis libero.
        </p>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/aidan-honeyman-45b430158/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href='mailto:info@honeyman.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};
