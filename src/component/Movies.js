import React, { Component } from 'react'
import axios from 'axios'

const MyMoviesAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=1f8e5c8ab5a33900ed19cea16bee33b9&language=en-US&page=1'
})

export default class Movies extends Component {

    state = {
        movies: []
    }

    getMovie = async () =>{
        const response = await MyMoviesAPI.get()

        const InfoMovies = response.data.results.map(item =>{
            return{
                movieName: item.title, 
                sinopse: item.overview,
                imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
            }
        })

        this.setState({
            movies: InfoMovies
        })
    }

    componentDidMount(){
        this.getMovie()
    }


  render() {
    return (
        <div>
            <h1>Movies</h1>
            <ul>{this.state.movies.map(item => (
                <>
                <li>{item.movieName}</li>
                <p>{item.sinopse}</p>
                <img src={item.imagem} alt="Imagem do filme" />
                </>
            ))}</ul>
        </div>
    )
  }
}
