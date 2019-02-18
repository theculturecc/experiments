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

p, input {
  cursor: url(static/cursor-text.png), pointer;
}

#get-the-news {
  width: 100%;
  font-size: 18px;
  line-height: 18px;
  margin: 20vh 0;

  @media screen and (max-width: 950px) {
    height: 8em;
  }

  form {
    margin: 0 auto;
    width: 320px;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }

    &:focus-within {
      opacity: 1;
      #caret {
        display: none;
      }
    }

    div {
      position: relative;
    }

    input[type='email'] {
      box-sizing: border-box;
      margin: 0;
      padding: 1.5em 4em 1.5em 2em;
      width: 100%;
      outline: none;
      border: #2e2e2e 1px solid;
      border-radius: 40px;
      background: transparent;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
      -webkit-appearance: none;

      &.has-content ~ #caret, &.is-valid ~ #caret /* &:valid ~ #caret */, &:focus ~ #caret {
        display: none;
      }

      &:not(.is-valid) ~ #submit {
      /* &:not(:valid) ~ #submit { */
        display: none;
      }

      &.is-valid ~ #submit {
      /* &:valid ~ #submit { */
        opacity: 1;
        pointer-events: all;
      }

      &.is-valid ~ #submit:hover {
      /* &:valid ~ #submit:hover { */
        opacity: 0.6 !important;
      }
    }

  }


  #submit {
    position: absolute;
    right: 1em;
    top: 0.75em;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: url(static/cursor-pointer.png), pointer;

    &:active {
      cursor: url(static/cursor-pointer-clicked.png), pointer;
    }

    img {
      height: 1em;
    }
  }

  #caret {
    position: absolute;
    top: calc(1.5em + 1px);
    left: calc(2em + 1px);
    width: 1px;
    height: calc(1.33em - 1px);
    background: #000000;
    opacity: 0.6;
    animation: blink 1s step-start infinite;
  }

  #whats-up {
    padding-top: 18px;
    text-align: center;
    line-height: 140%;
  }

  #only-joy {
    opacity: 0.3;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes visibility {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  1% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
