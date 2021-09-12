import { useContext } from 'react';
import { ThemeContext } from '../../App';

import Curve from '../Curve/Curve';
import Character from '../Character/Character';
import LazyLoad from 'react-lazyload';

import './works.scss';

const togeImg =
  'https://firebasestorage.googleapis.com/v0/b/togebetter.appspot.com/o/portfolio%2Ftogebetter.png?alt=media&token=afc2011e-87de-4d07-8840-18829016e8e1';

function Works() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="works" className="works section">
      <div className="container pb-32" data-aos="fade-left">
        <div className="title mx-16">
          <Character index="0" scale="4" />
          <span className="mx-32">Works</span>
        </div>
        <div className="works__item">
          <div className="works__item__body">
            <div className="works__item__title">
              1. Togebetter{' '}
              <span className="nes-text is-small">- Personal project</span>
            </div>
            <LazyLoad>
              <img
                src={togeImg}
                className="works__item__image border"
                alt="Togebetter"
              />
            </LazyLoad>
            <div>
              <p>
                A web app for language learning.
                <br />
                Technologies Used:
                <span className="nes-text is-warning ml-8">
                  Vue, Firebase, ElementUI
                </span>
              </p>

              <ul className={`nes-list is-circle ${theme}`}>
                <li>
                  Users can post, react, save, share questions or answers (data
                  stored in Firebase).
                </li>
                <li>Users can search for the questions (with Algolia API).</li>
              </ul>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://togebetter.netlify.app/"
              >
                Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/hungteddy/togebetter"
                className="ml-16"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <Curve color="#041737" flip />
    </div>
  );
}

export default Works;
