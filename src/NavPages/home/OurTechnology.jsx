import React from 'react';

const OurTechnology = () => {
  return (
    <div style={styles.container}>
      <p className='text-2xl pt-20'>Visit our website for more information:</p>
      <a href="https://ezisc.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>
        https://ezisc.com/
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center', // Center the content
    marginTop: '20px', // Add spacing
  },
  link: {
    color: '#007bff', // Blue color for the link
    textDecoration: 'none', // Remove underline
    fontSize: '1.2rem', // Adjust font size
  },
};

export default OurTechnology;
