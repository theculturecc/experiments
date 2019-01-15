import styled, { keyframes } from 'styled-components';

const displayContent = keyframes`
  to {
    height: 85vh;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${displayContent} 2s cubic-bezier(0, 0.5, 0.4, 1.1) forwards 2s;
`;

export default Hero;
