import React from 'react';
import contract from '../assets/img/contract.svg'
import business from '../assets/img/business.svg'
import marketing from '../assets/img/marketing.svg'

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
        <div>
          <img
            src={contract}
            alt='contract'
          />
          <h3>legal</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img
            src={marketing}
            alt='marketing'
          />
          <h3>marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img
            src={business}
            alt='business'
          />
          <h3>business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </article>
    </section>
  );
};
