import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    #root {
        height: 100%;
    }

    body {
        height: 100%;
        background-color: #0a0a0a;
        padding: .5rem;
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }
`

export default GlobalStyle