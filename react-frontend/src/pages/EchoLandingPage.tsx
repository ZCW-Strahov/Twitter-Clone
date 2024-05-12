import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { OrbitControls, Stars } from '@react-three/drei';
import Particles from 'react-tsparticles';
import React, { useState } from 'react';
import './EchoLandingPage.css';

// Global styles
const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: all 0.25s linear;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color};
    border-radius: 10px;
  }
`;

// Container component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100vw;
  background-image: url('/Users/danny/Projects/Twitter-Clone/react-frontend/src/asan/Assets/echobackgroundpicturelogin.jpg'); // Update with your image path
  background-size: cover;
  background-position: center; // Center the background image
  background-attachment: fixed;
`;

// Button component
const Button = styled(motion.button)`
  padding: 10px 20px;
  width: 300px;
  background-color: #131313; // Set the background color to red
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  z-index: 10;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #ff0000; // Darken the button on hover
  }
`;

// Title and Subtitle using theme color
const Title = styled(motion.h1)`
  font-size: 92px;
  z-index: 10;
`;

const Subtitle = styled(motion.p)`
  font-size: 40px;
  z-index: 10;
`;

// EchoLandingPage component
const EchoLandingPage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  `;

  const theme = darkMode
    ? {
        background: '#131313',
        color: '#ddd',
        toggleBorder: '#131313',
        gradient: 'linear-gradient(#091236, #1E215D)',
      }
    : {
        background: '#fff',
        color: '#131313',
        toggleBorder: '#FFF',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
      };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: theme.background } },
            interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
            particles: { color: { value: theme.color }, links: { color: theme.color } },
          }}
        />
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <Stars />
        </Canvas>
        <button onClick={toggleTheme} style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
          Toggle Theme
        </button>
        <Title style={{ color: theme.color }}>Happening now</Title>
        <div className="home-image"></div>
        <Subtitle style={{ color: theme.color }}>Join Echo today.</Subtitle>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLoginClick}>
            Log In
          </Button>
          <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </form>
        <Button onClick={() => navigate('/homepage')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Continue As Guest
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default EchoLandingPage;
