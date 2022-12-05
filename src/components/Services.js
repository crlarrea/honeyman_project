import React, { useState } from 'react';
import contract from '../assets/img/contract.svg';
import business from '../assets/img/business.svg';
import marketing from '../assets/img/marketing.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer';
const services = [
  {
    img: contract,
    title: 'legal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: marketing,
    title: 'marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: business,
    title: 'business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const Services = () => {
  return (
    <section className='services' id='services'>
      <article>
        <h2>services</h2>
        <p>
          Whether you need to translate a contract or marketing materials, I
          tailor my translation strategy to meet your individual needs.
        </p>
      </article>
      <article>
        {services.map((entry, index, arr) => {
          return (
            <div key={index} data-position={index}>
              <img src={entry.img} alt={entry.title} />
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
