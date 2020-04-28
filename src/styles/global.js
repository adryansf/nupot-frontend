import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    min-height: 100vh;
    overflow-x: hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body,button,input{
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
`;
