import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}`

export const Header = styled.div`
    background-color: #401571e4;
    
    h1{
        padding: 2rem;
        font-size: 2em;
        font-family: 'Varela Round', sans-serif;        
        color: #f0ecec;
        text-shadow: 4px 4px 5px gray;
    }

    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    font-size: 1.2em;
    border: 1px solid black;

    a{
        text-decoration: none;
        font-size: 1.3em;
        color: #619797;  
        font-weight: 600;
        transition: .8s all;
    }

    a:hover{
        color: #d6e4cd;
        transform: scale(1.05);

    }

    .erropage{
    display: none;
    }
`
