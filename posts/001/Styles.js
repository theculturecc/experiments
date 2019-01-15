import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: Circular Air Pro;
  font-weight: 400;
  src: url(static/circular-book.otf);
}

@font-face {
  font-family: Circular Air Pro;
  font-weight: 500;
  src: url(static/circular-medium.otf);
}

body {
  background-color: #fffdf8;
  color: #282725;
  cursor: url(static/cursor-auto.png), auto;
  margin: 0;

  font-family: "Circular Air Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: 500;
  font-size: 12px;

  /* Larger than iphone 5s */
  @media (min-width: 350px) {
    font-size: 13px;
  }

  /* Larger than iphone 6 plus */
  @media (min-width: 550px) {
    font-weight: 400;
  }

  /* Larger than tablet */
  @media (min-width: 770px) {
    font-size: 14px;
  }
}

p {
  margin: 0;
  display: block;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 1.35em;

  line-height: 1.35em;
  font-size: 18px;
  font-weight: 500;

  /* Larger than iphone 5s */
  @media (min-width: 350px) {
    margin-bottom: 1.45em;
    font-size: 20px;
    line-height: 1.45em;
  }

  /* Larger than iphone 6 */
  @media (min-width: 400px) {
    font-size: 23px;
    line-height: 1.45em;
  }

  /* Larger than iphone 6 plus */
  @media (min-width: 550px) {
    margin-bottom: 1.3em;
    font-size: 35px;
    line-height: 1.3em;
  }

  /* Larger than tablet */
  @media (min-width: 770px) {
    font-size: 45px;
  }

  /* Larger than desktop */
  @media (min-width: 1025px) {
    margin-left: auto;
    margin-right: auto;
    width: 1008px;
    margin-bottom: 1.25em;
    font-size: 55px;
    line-height: 1.25em;
  }
}

a {
  text-decoration: none;
  color: inherit;
  outline: 0;
  font-weight: 700;
  cursor: url(static/cursor-pointer.png), pointer;

  &:active {
    cursor: url(static/cursor-pointer-clicked.png), pointer;
  }
}
`;
