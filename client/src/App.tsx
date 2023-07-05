import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Center } from './components/Center';

function App() {
  return (
    <div className="bg-dark h-full">
    <Header />
    <Center />
    </div>
  );
}

export default App;

