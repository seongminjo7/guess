import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Caslon+Display&family=Smooch+Sans:wght@100..900&display=swap');
    
    @font-face {
        font-family: 'Freesentation';
        src: url('/fonts/FreesentationVF.ttf') format('truetype');
        font-weight: 100 900; /* variable font */
        font-style: normal;
    }

    :root{
        --main-black:#0C0C0C;
        --main-white:#FAF9F6;
        --main-font: 'Freesentation', sans-serif;
        --sub-font: "Libre Caslon Display", serif;
        --random-font: "Amiri", serif;
    }


    // media query
    // @media (max-width: 1400px)
    // @media (max-width: 1024px)
    // @media (max-width: 812px)
    // @media (max-width: 420px)

    html {
        font-size: 16px;
    }

    @media (max-width: 1400px){
        html {
            font-size: 14px;
        }
    }

    /* @media (max-width: 1024px){
        html {
            font-size: 10px;
        }
    } */

    @media (max-width: 812px){
        html {
            font-size: 10px;
        }
    }

    @media (max-width: 420px){
        html {
            font-size: 8px;
        }
    }

    body {
        font-family: var(--main-font);
        font-weight: 400;
        background-color: var(--main-white);
        color: var(--main-black);
        word-break: keep-all;
    }


`
export default GlobalStyle;