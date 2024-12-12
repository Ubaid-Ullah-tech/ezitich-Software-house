import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";


const Home = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStars(true);
    }, 1000); // Delay for 2 seconds
    return () => clearTimeout(timer);
  }, []);



  // Spring animation for up and down motion
  const textAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-10px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  // Spring animation for the appearance of the large star
  const starAnimation = useSpring({
    opacity: showStars ? 1 : 0,
    transform: showStars ? "scale(1)" : "scale(0)",
    config: { tension: 120, friction: 14 },
  });

  // Background stars fade-in animation
  const backgroundStarsAnimation = useSpring({
    opacity: showStars ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#0d1117",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Huge Star */}
      <animated.div
        style={{
          ...starAnimation,
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, yellow 20%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      ></animated.div>

      {/* Animated Stars Background */}
      <animated.div
        style={{
          ...backgroundStarsAnimation,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // background: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          background: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></animated.div>

      {/* Moving Text */}
      <animated.div
        style={{
          ...textAnimation,
          zIndex: 2,
          paddingBottom:"20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Welcome to Night Sky</h1>
        <p style={{ margin: "10px 0", fontSize: "1.2rem" }}>
          Gaze at the stars and feel the serenity.
        </p>
      </animated.div>

      {/* Circular Text */}
      <animated.div
        style={{
          ...textAnimation,
          position: "absolute",
          bottom: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "2px solid white",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <p style={{ fontSize: "1rem", padding: "6px" }}>
          Explore the endless wonders of the universe.
        </p>
      </animated.div>
    </div>
  );
};

export default Home;
