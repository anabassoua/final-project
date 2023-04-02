import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --richblack-bg: #0d1b2a;
    --oxfordblue-bg: #1b263b;
    --font-color: #fff;
    --mint: #00c896;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Roboto', sans-serif;
}

html, body, div, span, h1, h2, h3, h4, img, em, ol, ul, li, form, nav, footer, header, p{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  box-sizing: border-box;

}
body {
      line-height: 1;
      background-color: var(--oxfordblue-bg);
      color: var( --font-color)
  }

h1, h2, h3, label, button {
  font-family: var(--font-heading);
}

p, a, li, input, span {
  font-family: var(--font-body)
}
`;
