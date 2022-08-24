import React, { Component } from 'react'
import axios from 'axios'

const myShowsAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=1f8e5c8ab5a33900ed19cea16bee33b9&language=en-US&page=1'
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
      <div>
            <h1>Shows</h1>
            <ul>{this.state.shows.map(item => (
                <>
                <li>{item.title}</li>
                <p>{item.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="Imagem da série" />
                </>
            ))}</ul>
        </div>
    )
  }
}
