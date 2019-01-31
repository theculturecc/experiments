import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
  to {
    height: 85vh;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${moveUp} 2s cubic-bezier(0, 0.5, 0.4, 1.1) forwards 2.5s;
`;

export default Hero;
