import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <header className="py-3 mb-12 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-bold text-3xl">
          <a href="#" onClick={reloadPage}>
            LeBon<span className="text-violet-700">Logis</span>
          </a>
        </h2>
        <div className="flex items-center gap-6">
          <Link
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Se Connecter
          </Link>
          <Link
            className=" bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
            to="/"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
