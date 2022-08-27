import React, { Component } from 'react';
import Shows from './Components/Shows.js';
import Home from './Components/Home.js';
import Movies from './Components/Movies.js';
import Erro from './Components/Erro.js';
import * as S from './Style/AppStyle.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

 export default class App extends Component {
  render() {
    return (
      <Router>

        <S.Header>
          <h1>WatchFlix</h1>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movie Page</Link>
          <Link to='/shows'>Shows Page</Link>
          <Link to='*' class='erropage'>Erro</Link>
        </S.Header>

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