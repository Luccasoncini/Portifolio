import React from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './components/pages/home';
import { MenuProvider } from './hooks/useMenu';

export function App() {
  return (
    <MenuProvider>
      <Header />
      <Home />
      <Footer />
    </MenuProvider>
  );
}
