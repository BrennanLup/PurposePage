import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import MockupSection from './components/MockupSection/MockupSection'
import ReviewSection from './components/ReviewSection/ReviewSection'
import './App.css'

function App() {

  const handleSignUp = () => {
    // Add signup logic
    console.log('Sign up clicked')
  }

  const handleLogin = () => {
    // Add login logic
    console.log('Login clicked')
  }

  const handleStartNow = () => {
    // Add start now logic
    window.location.href = "https://brenlup.gumroad.com/l/ewono";
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

        
        <div className="cta-section">
          <button 
            onClick={handleStartNow}
            className="start-now-button"
          >
            Start Now
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
