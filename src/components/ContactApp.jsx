import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AddPage from '../page/AddPage';
import HomePage from '../page/HomePage';

function ContactApp() {
    return (
      <div className="contact-App">
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
  

export default ContactApp;