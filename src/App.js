import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Learnmore from './Components/Learnmore';
import Steps from './Components/Steps';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import FAQ from './Components/FAQ';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Learnmore />
        <Steps />
        <Services />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default App;
