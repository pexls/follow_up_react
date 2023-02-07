import React from 'react';
import './App.css';

function Header() {
  return (
    <header style={headerStyles}>
      <h1 className='head'>Header</h1>
    </header>
  );
}

function Body() {
  return (
    <main style={bodyStyles}>
      <h1 className='bodeS'>Body</h1>
    </main>
  );
}

function Footer() {
  return (
    <footer className='footerS' style={footerStyles}>
      <h1>Footer</h1>
    </footer>
  );
}

const headerStyles = {
  background: 'lightblue',
  fontSize: '24px',
  textAlign: 'center',
  
};

const bodyStyles = {
  background: 'lightgray',
  fontSize: '20px',
  textAlign: 'center'
};

const footerStyles = {
  background: 'darkgray',
  fontSize: '18px',
  textAlign: 'center'
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
