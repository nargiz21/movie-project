import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
       
        <Routes>
          <Route path="/" exact element={<MainPage/>} />
          <Route path="/list/:id" exact element={<ListPage/>} />

        </Routes>
     
        
      </div>
    );
  }
}

export default App;
