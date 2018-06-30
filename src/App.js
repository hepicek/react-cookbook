import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';


import Content from './components/content/Content';


class App extends Component {

  render() {

    return (
      <div>
        <header>
            <Header/>
        </header>
        <Content />
      </div>
      
    );
  }
}

export default App;
