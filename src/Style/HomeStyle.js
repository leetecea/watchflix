import styled, { createGlobalStyle } from 'styled-components'
import R2DR from '../Img/wallpaper.jpg'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Didact Gothic', sans-serif;
}
`
export const Container = styled.main`
    display: flex;
    justify-content: center;
    height: 85vh;
    width: 100%;
    background-image: url(${R2DR});
    background-repeat: no-repeat;
    background-size: cover;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #f0ecec;
        align-items: center;
        height: 20rem;
        line-height: 3em;
    }

    h2{
        font-size: 2.5em;
    }

    p{
        font-size: 1.4em;
    }
`


