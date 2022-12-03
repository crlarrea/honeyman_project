import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
export const Testimonials = ({ feedback }) => {
  return (
    <section className='testimonials' id='testimonials'>
      <article>
        <h2>what people are saying</h2>
        <Player autoplay loop src={require('../assets/img/feedback.json')}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </article>
      <article>
        {feedback.map((entry, index, arr) => {
          return (
            <div key={index}>
              <p>{entry.name}</p>
              <p>{entry.job}</p>
              <p>
                {[...Array(entry.rating)].map((el, index) => {
                  return <FontAwesomeIcon icon={faStar} />;
                })}
                {[...Array(5 - entry.rating)].map((el, index) => {
                  return <FontAwesomeIcon icon={faEmptyStar} />;
                })}
              </p>
              <p>{entry.feedback_en}</p>
              <p>{entry.date}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
