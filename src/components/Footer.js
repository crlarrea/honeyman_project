import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <article>
        <p>E: info@honeyman.com</p>
      </article>
      <article>
        <FontAwesomeIcon icon={faCircle} />
        <p>open to work</p>
      </article>
      <article>developed by long lane digital</article>
    </footer>
  );
};
