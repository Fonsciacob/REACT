import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { Navbar } from './components/Navbar';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </UserProvider>
  );
};
