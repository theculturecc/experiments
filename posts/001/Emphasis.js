import styled from 'styled-components';

const Emphasis = styled.a`
  position: relative;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    height: 0.05em;
    bottom: 0.05em;
    left: 10%;
    width: 80%;
    background: #282725;
    opacity: 0.1;
    transform-origin: 0 50%;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  &:focus,
  &:hover {
    &:after {
      transform: scaleY(1.5);
      opacity: 0.5;
      transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    }
  }
`;

export default Emphasis;
