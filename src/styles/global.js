import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #20232A;
    --background-light: #FFFFFF;
    --blue: #0050DC;
    --green: 	#2fcd71;
    --red: #d63d2e;
    --gray: #EAEAEA;
    --shape: #3D3E43;
    --text-dark: #525252;
    --text-light: #FFFFFF;
    --text-gray: #808080;

    --fontWeightRegular: 400;
    --fontWeightMedium: 500;
    --fontWeightSemiBold: 600;
    --fontWeightBold: 700;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;
