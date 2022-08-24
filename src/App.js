import React, { Component } from 'react';
import Shows from './component/Shows.js';
import Home from './component/Home.js';
import Movies from './component/Movies.js';
import Erro from './component/Erro.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

 export default class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Link to='/movies'>Movie Page</Link>
          <Link to='/shows'>Shows Page</Link>
          <Link to='/'>Home Page</Link>
          <Link to='*'>Erro Page</Link>
        </div>

        <Routes>

          <Route path='/shows' element={<Shows/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Erro/>}/>

        </Routes>

      </Router>
    );
  }
}