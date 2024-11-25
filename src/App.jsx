
import React from 'react';
import './assets/App.scss';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Separator from './components/Separator/Separator';
import About from './components/About/About'; 
import Banking from './components/Banking/Banking';

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Separator />
      <About />
      <Banking />
    </>
  );
}

export default App;