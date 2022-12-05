import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
export const Nav = () => {
  return (
    <nav className='nav'>
      <p>
        <span>
          <FontAwesomeIcon icon={faCircleDot}/>
        </span>
        honeyman translations
      </p>
      <ul>
        <li>
          <a href='#testimonials' alt='testimonials'>
            testimonials
          </a>
        </li>
        <li>
          <a href='#services' alt='services'>
            services
          </a>
        </li>
        {/* <li>
          <a href='#blog' alt='posts'>
            blog
          </a>
        </li> */}
        <li>
          <a href='#about' alt='about'>
            about me
          </a>
        </li>
        <li>
          <a href='#contact' alt='contact'>
            contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};
