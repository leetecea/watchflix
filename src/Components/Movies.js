import React, { Component } from 'react'
import * as S from '../Style/MoviesStyle.js'
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
                imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
                id: item.id,
                vote: item.vote_average
            }
        })

        this.setState({
            movies: InfoMovies
        })

        console.log(response)
    }

    componentDidMount(){
        this.getMovie()
    }


  render() {
    return (
        <S.Container>
            <S.GlobalStyle />
            <h2>Movies</h2>
            <S.MoviesList>
                {this.state.movies.map(item => (
                <S.Movies key={item.id}>
                    <a href="http://">
                        <img src={item.imagem} alt={item.movieName}/>
                    </a>
                    <div>
                        <S.Title>{item.movieName}</S.Title>
                        <span>{item.vote}</span>
                    </div>
                </S.Movies>
            ))}
            </S.MoviesList>
        </S.Container>
    )
  }
}
