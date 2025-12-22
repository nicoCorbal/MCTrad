import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EmailButton from './EmailButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Enlace de salto para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-blue-600 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Ir al contenido principal
      </a>

      <Header />
      <main
        id="main-content"
        className="flex-grow pt-14 md:pt-20"
      >
        <Outlet />
      </main>
      <Footer />
      <EmailButton />
    </div>
  );
};

export default Layout;
