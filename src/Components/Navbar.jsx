import React from 'react';
// import './Navbar.css'
import logoImage from '../Images/KoinX logo.JPG';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'white', fontWeight: 600, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoImage}  alt="Company Logo" style={{ width: '100px', height: 'auto'}}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a style={{color: '#000',textDecoration: 'none',padding: '0.5rem 1rem',borderRadius: '5px',marginRight: '0.5rem'}} 
    href="/">Crypto Taxes</a>
        <a style={{color: '#000',textDecoration: 'none',padding: '0.5rem 1rem',borderRadius: '5px',marginRight: '0.5rem'}} href="/">Free Tools</a>
        <a style={{color: '#000',textDecoration: 'none',padding: '0.5rem 1rem',borderRadius: '5px' , marginRight: '0'}} href="/">Resources Center</a>
        <button style={{ backgroundColor: 'rgba(27, 74, 238, 255)', color: 'white', padding: '0.5rem 1rem', border: '1px solid rgba(27, 74, 238, 255)', borderRadius: '5px', cursor: 'pointer', marginRight: '0.5rem' }}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
