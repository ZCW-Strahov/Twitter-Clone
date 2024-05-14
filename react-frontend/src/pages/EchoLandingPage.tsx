import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Particles from 'react-tsparticles';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EchoLandingPage.css';

// Global styles
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    overflow: hidden;
    transition: all 0.25s linear;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scrollbarColor};
    border-radius: 10px;
  }
`;

// Dynamic Background Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

// Stylish Button with smooth transition
const Button = styled(motion.button)`
  padding: 15px 30px;
  width: 250px;
  background-color: ${props => props.theme.buttonColor};
  border: none;
  color: white;
  font-size: 21px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  margin: 15px;
  backdrop-filter: blur(10px);
  &:hover {
    background-color: ${props => props.theme.buttonHoverColor};
  }
`;

// Elegant Typography with neon glow
const Title = styled(motion.h1)`
  font-size: 72px;
  font-weight: bold;
  color: ${props => props.theme.color};
  text-shadow:
    0 0 8px ${props => props.theme.neonColor},
    0 0 20px ${props => props.theme.neonColor},
    0 0 30px ${props => props.theme.neonColor};
  z-index: 10;
`;

const Subtitle = styled(motion.p)`
  font-size: 32px;
  color: ${props => props.theme.color};
  z-index: 10;
`;

// EchoLandingPage Component
const EchoLandingPage = () => {
  const navigate = useNavigate();

  // Define a dark theme with neon color
  const darkTheme = {
    background: '#131313',
    color: '#ddd',
    scrollbarColor: '#666',
    buttonColor: 'rgb(7,181,244)',
    buttonHoverColor: 'rgb(19,19,19)',
    neonColor: 'rgba(7,181,244,0.94)', // Neon green for the glow effect
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Container>
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: darkTheme.background } },
            interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
            particles: { color: { value: darkTheme.color }, links: { color: darkTheme.color } },
          }}
        />
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <Stars />
        </Canvas>
        <Title>
          "Join the Conversation, Echo Your Voice."
          <div className="sound-image"></div>
        </Title>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate('/login')}>
            Log In
          </Button>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default EchoLandingPage;
