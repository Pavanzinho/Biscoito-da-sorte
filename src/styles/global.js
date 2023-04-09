import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }
    
    :root {
        font-size: 62.5%;
    }

    body {
        background:linear-gradient(45deg, #190361, #bb00ff);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
  }
`
