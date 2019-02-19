import styled from 'styled-components';

// prettier-ignore
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
    transform-origin: 50% 50%;
    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-out,
      background 0.3s ease-out;
  }

  &:focus,
  &:hover {
    &:after {
      transform: scaleY(1.5);
      opacity: 0.5;
      transition:
        transform 0.3s ease-in,
        opacity 0.3s ease-in,
        background 0.3s ease-in;
    }
  }

  &:active {
    &:after {
      transform: scale(0.8, 1.5);
      ${props => props.accent && `background: ${props.accent}`};
    }
  }
`;

export default Emphasis;
