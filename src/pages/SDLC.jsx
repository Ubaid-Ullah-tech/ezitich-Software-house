import React, { useState, useEffect } from "react";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SDLCAnimation = () => {

  useEffect(()=>{
     AOS.init({
      duration:2000
     });
  },[])
  const phases = [
    "Planning",
    "Designing",
    "Defining",
    "Building",
    "Testing",
    "Deployment",
    "Maintenance",
  ];

  const [visiblePhases, setVisiblePhases] = useState([]);

  useEffect(() => {
    // Animate each phase one by one
    phases.forEach((phase, index) => {
      setTimeout(() => {
        setVisiblePhases((prev) => [...prev, phase]);
      }, index * 1000); // 1 second delay for each phase
    });
  }, [phases]);

  const containerStyle = {
    position: "relative",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #1e3c72, #2a5298)",
    color: "#fff",
    fontSize: "1rem",
  };

  const centralBoxStyle = {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#fff",
    color: "#1e3c72",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
    textAlign: "center",
    zIndex: 10,
  };

  const phaseStyle = (angle) => ({
    position: "absolute",
    transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
    textAlign: "center",
    width: "100px",
    height: "100px",
    lineHeight: "100px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    fontSize: "0.9rem",
    color: "#fff",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
  });

  const visiblePhaseStyle = {
    opacity: 1,
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <h1 
      data-aos="fade-up"
      style={{ marginBottom: "20px", textTransform: "uppercase" }}>
        Software Development Life Cycle
      </h1>
      <div style={containerStyle}>
        {/* Central SDLC Box */}
        <div 
        data-aos="fade-right"
        style={centralBoxStyle}>SDLC</div>

        {/* Phases Positioned Around the SDLC */}
        {phases.map((phase, index) => {
          const angle = (360 / phases.length) * index; // Evenly distribute phases in a circle
          return (
            <div

            data-aos="fade-left"
              key={index}
              className={`animate__animated ${
                visiblePhases.includes(phase) ? "animate__fadeIn" : ""
              }`}
              style={{
                ...phaseStyle(angle),
                ...(visiblePhases.includes(phase) ? visiblePhaseStyle : {}),
              }}
            >
              {phase}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SDLCAnimation;
