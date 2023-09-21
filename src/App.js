import React,{useState} from 'react';
import './App.css';
import Header from './component/Header/Header';
import Background from './component/Background';
import Intro from './component/Intro';
import Meals from './component/Meals/Meals';
import { AmountProvider } from './contexts/AmountContext';
function App() {
  return (
    <>
    <AmountProvider>
      <Header/>
      <Background/>
      <Intro/>
      <Meals/>
    </AmountProvider>
    </>
  );
}

export default App;
