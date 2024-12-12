import { createGlobalStyle } from "styled-components";

const BASE_PIXEL = 16;

export const toRem = (value: number) => {
  return value / BASE_PIXEL + "rem";
};

const AppStyle = createGlobalStyle`
    @font-face {
        font-family: 'Acumin Pro';
        font-style: normal;
        font-weight: normal;
        src: local('Acumin Pro'), url('./fonts/Acumin-RPro.woff') format('woff');
    }
    
    @font-face {
        font-family: 'Acumin Pro Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Acumin Pro Italic'), url('./fonts/Acumin-ItPro.woff') format('woff');
    }

    @font-face {
        font-family: 'Acumin Pro Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Acumin Pro Bold'), url('./fonts/Acumin-BdPro.woff') format('woff');
    }

    @font-face {
        font-family: 'Acumin Pro Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Acumin Pro Bold Italic'), url('./fonts/Acumin-BdItPro.woff') format('woff');
    }
    
    * {
        font-family: "Acumin Pro", sans-serif !important;
    }
    
    body {
        margin: 0;
    }
`;

export default AppStyle;
