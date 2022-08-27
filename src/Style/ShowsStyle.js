import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Didact Gothic', sans-serif;
}
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280vh;
  background-color: #1f1e1e;

  h2 {
    padding: 2em;
    font-size: 2em;
    color: #f0ecec;
  }
`;

export const ShowsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  width: 100rem;
  height: 30rem;
  list-style: none;
`;

export const Shows = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    border-radius: 1.5em;
    margin-bottom: 1rem;
    transition: 0.5s all;
    border: 1px solid #79659b;
  }

  a:hover img {
    transform: scale(1.08);
  }
  
 div{
    display: flex;
    justify-content: center;
    width: 100%;
  }

  span{
    margin-left: 1rem;
    color: #f0ecec;
    font-weight: 600;
    background-color: #42414181;
    padding: 5px;
    border-radius: 8px;
  }
`;

export const Title = styled.h3`
  font-size: 1.3em;
  text-shadow: 1px 3px 4px #585066;
  color: #f0ecec;
`;
