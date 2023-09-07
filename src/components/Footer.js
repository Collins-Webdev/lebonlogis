import React from 'react';
import Img from '../assets/img/github.svg';

const Footer = () => {
  const emailLink = 'mailto:collinshaya@gmail.com';

  return (
    <>
      <a href={emailLink}>
        <div className="fixed w-12 h-12 animate-bounce flex items-center justify-center bg-white rounded-full bottom-0 right-2">
          <img src={Img} alt="Envoyer un e-mail à collinshaya@gmail.com" />
        </div>
      </a>
    </>
  );
};

export default Footer;
