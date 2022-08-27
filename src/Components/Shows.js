import React, { Component } from 'react'
import * as S from '../Style/ShowsStyle.js'
import axios from 'axios'

const myShowsAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=1f8e5c8ab5a33900ed19cea16bee33b9&language=en-US&page=1'
})

export default class Shows extends Component {

  state = {
    shows: []
  }

    getShows = async () =>{
      const response = await myShowsAPI.get()

      const InfoShows = response.data.results.map(item => {
        return {
          ...item
        }
      })

      this.setState({
        shows: InfoShows
      })
    }

    componentDidMount(){
      this.getShows()
    }

  render() {
    return (
      <S.Container>
        <S.GlobalStyle />
        <h2>Shows</h2>
        <S.ShowsList>{this.state.shows.map(item => (
          <S.Shows>
            <a href="http://">
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.name} />
            </a>
            <div>
              <S.Title>{item.name}</S.Title>
              <span>{item.vote_average}</span>
            </div>
          </S.Shows>
        ))}</S.ShowsList>
      </S.Container>
    )
  }
}
