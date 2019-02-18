import React from 'react';
import styled from 'styled-components';

export default function Floater({ children }) {
  return Array.from(children).map((letter, index) => (
    <Letter key={index} index={index}>
      {letter}
    </Letter>
  ));
}

const Letter = styled.span`
  position: relative;
  ${props => (props.index % 2 ? 'top' : 'bottom')}: 0.02em;
`;
