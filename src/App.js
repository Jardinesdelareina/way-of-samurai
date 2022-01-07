import React from 'react';
import "./App.css";
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Content/>
    </div>
  )
}

export default App;