import React, { Component } from 'react'
import * as S from '../Style/HomeStyle.js'

export default class Home extends Component {
  render() {
    return (
      <S.Container>
        <S.GlobalStyle />
        <div>
          <h2>Hello! Welcome to WatchFlix.</h2>
          <p>Choose a movie or series and have fun!</p>
        </div>
      </S.Container>
    )
  }
}
