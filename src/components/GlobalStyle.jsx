import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    --color-blue: #007fee;
    --color-blue-hover:#0f6dc7;
    --color-green:#35b9a1;;
    --color-green-hover:#009c80;;
    --color-red:#fb2828;
    --color-red-hover:#de0c0c;
    --color-error: #e9b0b0;
    --color-blue-text: #d7fcff;
    --color-text:#705195;
    --color-btn:#766392;
     --color-btn-hover:#594477;
  }
  html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}
li{list-style: none;}
  body{background-color: #f2f2f6;};`;
