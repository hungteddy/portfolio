import { useEffect, useRef } from 'react';

import { init } from 'ityped';

import './intro.scss';

function Intro() {
  const text = useRef();

  useEffect(() => {
    init(text.current, {
      typeSpeed: 130,
      backDelay: 1000,
      loop: true,
      cursorChar: '|',
      strings: ['<Hello, />', '<Welcome to my portfolio />'],
    });
  }, []);

  return (
    <div id="intro" className="intro section">
      <div className="intro__wrapper">
        <span ref={text} className="intro__welcome"></span>
        <br />
        {'<'}I'm
        <span className="intro__title">
          <span className="nes-text">Hung Tran</span>
        </span>
        , <br />
        <p className="text-right">a front-end developer.{' />'} </p>
        <div className="intro__sns">
          <a href="#">
            <i className="nes-icon facebook"></i>
          </a>
          <a href="#">
            <i className="nes-icon linkedin"></i>
          </a>
          <a href="#">
            <i className="nes-icon github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;