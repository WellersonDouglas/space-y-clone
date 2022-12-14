import { createGlobalStyle } from 'styled-components'

// provisorio
function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem`), '')
    .trim()
}

export const GlobalStyles = createGlobalStyle`
/* Colors */
:root{
  --space: #0B1E8A;
  --space-ligth: #3D68B2;
  --space-dark: #040327;
  --gray-01: #0D0E13;
  --gray-02: #2C2D3A;
  --gray-03: #60616F;
  --gray-04: #898A93;
  --gray-05: #D5D5DB;
  --mars: #E85937;
  --mars-light: #FF8C70;
  --mars-dark: #CF3F1D;
  --sun: #F5D15F;
  --uranus: #24FFE9;
  --jupiter: #E00E34;
  --earth: #0FDD86;
  --saturn: #554AD7;
  --text: #FFF;

  /* Font */

  --font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} 'Heebo', sans-serif;
  --font-h1: 700 ${pixelToRem(32)}/${pixelToRem(48)} 'Heebo', sans-serif;
  --font-h2: 500 ${pixelToRem(24)}/${pixelToRem(32)} 'Heebo', sans-serif;
  --font-h3: 500 ${pixelToRem(20)}/${pixelToRem(24)} 'Heebo', sans-serif;

  --text-5: 500 ${pixelToRem(18)}/${pixelToRem(32)} 'Heebo', sans-serif;
  --text-4: 500 ${pixelToRem(18)}/${pixelToRem(24)} 'Heebo', sans-serif;
  --text-3: 500 ${pixelToRem(14)}/${pixelToRem(20)} 'Heebo', sans-serif;
  --text-2: 400 ${pixelToRem(16)}/${pixelToRem(24)} 'Heebo', sans-serif;
  --text-1: 400 ${pixelToRem(14)}/${pixelToRem(24)} 'Heebo', sans-serif;

}


* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
  @media(max-width: 1440px){
    /* font-size: 93.75%; */
  }
  @media(max-width: 375px){
    /* font-size: 87.5%; */
  }
}

body {
	-webkit-font-smoothing: antialiased;
}
`
