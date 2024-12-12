import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const speed = Math.ceil(target / 100); // Adjust speed
      const timer = setInterval(() => {
        start += speed;
        if (start > target) {
          start = target;
          clearInterval(timer);
        }
        setCount(start);
      }, 20); // Adjust interval timing
    }
  }, [inView, target]);

  return (
    <div  ref={ref} style={styles.counterBox}>
      <h2 style={styles.number}>{count}</h2>
      <p style={styles.label}>{label}</p>
    </div>
  );
};

const AboutCounter = () => {
  return (
    <div  style={styles.container}>
      <Counter target={2000} label="Clients" />
      <Counter target={500} label="Team Members" />
      <Counter target={1000} label="Projects Done" />
      <Counter target={300} label="Online Students" />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200vh', // Make the container tall for scrolling
    background: '#f4f4f4',
    gap: '50px',
    padding: '20px',
  },
  counterBox: {
    background: '#fff',
    padding: '20px 40px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '250px',
  },
  number: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
  label: {
    fontSize: '1.2rem',
    color: '#333',
  },
};


export default AboutCounter;
