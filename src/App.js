import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


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

export default DragDropContext(HTML5Backend)(App);
