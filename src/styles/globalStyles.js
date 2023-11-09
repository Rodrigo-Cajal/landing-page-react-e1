import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #000000;
        --secondary: #39A7FF;
        --tertiary: #ffffff;
        --font-family: 'Montserrat', sans-serif;
        --font-weight-primary: 400;
        --font-weight-secondary: 500;
        --font-weight-tertiary: 700;
        --font-size-primary: 14px;
        --font-size-secondary: 18px;
        --font-size-tertiary: 35px;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
         overflow-x: hidden;
    }
    a {
        text-decoration: none;
        color: var(--tertiary);
    }
    a:visited {
        color: var(--tertiary);
    }
    li {
        list-style: none;
    }
`