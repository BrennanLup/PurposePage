import ringImage from '../../assets/home_page_background.png';
import './HeroSection.css';

const HeroSection = () => {
  const codeSnippet = `
import { useState } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import MockupSection from './components/MockupSection/MockupSection'
import ReviewSection from './components/ReviewSection/ReviewSection'

function App() {
  const handleSignUp = () => {
    console.log('Sign up clicked')
  }

  const handleLogin = () => {
    console.log('Login clicked')
  }

  const handleStartNow = () => {
    console.log('Start now clicked')
  }

  return (
    <div className="app">
      <Header 
        onSignUp={handleSignUp}
        onLogin={handleLogin}
      />
      <main className="main-content">
        <HeroSection />
        <MockupSection />
        <ReviewSection />
      </main>
    </div>
  )
}`;

  return (
    <section className="hero-section">
      <div className="code-background">
        <pre className="code-content">
          {codeSnippet}
        </pre>
      </div>
      
      <div className="hero-content">
        <div className="ring-container">
          <img src={ringImage} alt="Futuristic Ring" className="ring-image" />
          <div className='title-container'>
          <h1 className="hero-title">Stay on Target.</h1>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection; 