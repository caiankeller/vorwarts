import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html{
        height: 100%;
    }

    #root {
        height: 100%;
    }

    body {
        box-sizing: border-box;
        height: 100%;
        background: #242424;
        padding: .5rem;
        padding-left: 12rem;
        padding-right: 12rem;
        font-family: 'Roboto', sans-serif;

        @media(max-width: 1700px){
            padding-left: 9rem;
            padding-right: 9rem;
        }

        @media(max-width: 1545px) {
            padding-left: 6rem;
            padding-right: 6rem;
        }

        @media(max-width:1412px) {
        padding: 0rem;
    }
    }
`

export default GlobalStyle