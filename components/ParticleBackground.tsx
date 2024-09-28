// "use client";
// import React, { useEffect, useRef } from "react";

// // define particle
// interface Particle {
//   x: number; // X-coordinate of the particle
//   y: number; // Y-coordinate of the particle
//   size: number; // Size (radius) of the particle
//   speedX: number; // Horizontal speed of the particle
//   speedY: number; // Vertical speed of the particle
// }

// export const ParticleBackground = () => {
//   // Ref to store the canvas element
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Ref to store the current mouse position (initially set to off-screen)
//   const mousePos = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

//   useEffect(() => {
//     // Access the canvas element
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     // Get the 2D rendering context for the canvas
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Function to resize the canvas based on the window size
//     // this caused some weird stuff on mobile when the keyboard was open, but it's not a big deal because user probably wont ever see it
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth; // Set canvas width to window width
//       canvas.height = window.innerHeight; // Set canvas height to window height
//     };

//     // Call resizeCanvas initially and whenever the window resizes
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Array to hold all the particle objects
//     const particles: Particle[] = [];

//     // Function to determine how many particles should be on the screen
//     const getParticleCount = () => {
//       if (window.innerWidth < 800) return 50; // Fewer particles on small screens. Project section was bit overwhelming to read on moble if there were too many particles
//       return 100; // More particles on larger screens
//       // TODO consider adding maybe even more on larger screens
//     };

//     // Get the number of particles to be created
//     const particleCount = getParticleCount();

//     // Create and store particles with random positions and speeds
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width, // Random x position within canvas
//         y: Math.random() * canvas.height, // Random y position within canvas
//         size: Math.random() * 2 + 1, // Random size (between 1 and 3 pixels)
//         speedX: Math.random() * 0.5 - 0.25, // Random initial speed in X direction
//         speedY: Math.random() * 0.5 - 0.25, // Random initial speed in Y direction
//       });
//     }

//     // Mouse move event listener to track mouse position
//     const handleMouseMove = (event: MouseEvent) => {
//       mousePos.current.x = event.clientX; // Update mouse X position
//       mousePos.current.y = event.clientY; // Update mouse Y position
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Function to calculate the distance between two points
//     const distance = (x1: number, y1: number, x2: number, y2: number) => {
//       return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // Pythagorean theorem. Im smart totally all me this part.
//     };

//     const maxDistance = 100; // Max distance for particle interaction
//     const mouseRepelForce = 0.05; // Force with which particles move away from the mouse
//     const friction = 0.99; // Higher friction to slow particles but not stop them completely. Without this the particles will keep moving forever at the collision speed making it unbearable to look at
//     const minSpeed = 0.1; // Minimum speed threshold to ensure particles keep moving

//     // Function to draw and update the particles
//     const drawParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

//       ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Set particle fill color
//       // TODO maybe add different color particles? Maybe even particles that have gradient on them

//       // Iterate over each particle
//       particles.forEach((particle) => {
//         // Draw each particle as a circle
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();

//         // Calculate distance between the mouse and the particle
//         const dist = distance(
//           particle.x,
//           particle.y,
//           mousePos.current.x,
//           mousePos.current.y
//         );

//         //NOTE this happens a bit too slowly currently atm and it does not seem consistent
//         // If the particle is within interaction range of the mouse
//         if (dist < maxDistance) {
//           // Calculate the direction in which the particle should move away from the mouse
//           const angle = Math.atan2(
//             particle.y - mousePos.current.y,
//             particle.x - mousePos.current.x
//           );

//           // Apply a small force to push the particle away from the mouse
//           particle.speedX += Math.cos(angle) * mouseRepelForce;
//           particle.speedY += Math.sin(angle) * mouseRepelForce;
//         }

//         // Update particle position by its speed
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         // If particle hits the horizontal bounds, reverse its horizontal speed (bounce effect)
//         if (particle.x < 0 || particle.x > canvas.width) {
//           particle.speedX *= -1; // Reverse direction
//         }

//         // If particle hits the vertical bounds, reverse its vertical speed (bounce effect)
//         if (particle.y < 0 || particle.y > canvas.height) {
//           particle.speedY *= -1; // Reverse direction
//         }

//         // Apply friction to gradually reduce the particle speed over time
//         particle.speedX *= friction;
//         particle.speedY *= friction;

//         // Ensure that particles never completely stop by checking the minimum speed threshold
//         if (Math.abs(particle.speedX) < minSpeed)
//           particle.speedX = minSpeed * Math.sign(particle.speedX);
//         if (Math.abs(particle.speedY) < minSpeed)
//           particle.speedY = minSpeed * Math.sign(particle.speedY);
//       });

//       // Request the next frame to animate continuously
//       requestAnimationFrame(drawParticles);
//     };

//     // Start the animation
//     drawParticles();

//     // Cleanup: Remove event listeners when the component unmounts
//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []); // Empty dependency array means this effect runs only once

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none"
//       style={{ zIndex: 0 }}
//     />
//   );
// };

"use client";
import React, { useEffect, useRef } from "react";

// Define the structure for each particle
interface Particle {
  x: number; // X-coordinate of the particle
  y: number; // Y-coordinate of the particle
  size: number; // Size (radius) of the particle
  speedX: number; // Horizontal speed of the particle
  speedY: number; // Vertical speed of the particle
}

export const ParticleBackground = () => {
  // Ref to track the canvas element where particles are drawn
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ref to store the current mouse position (initially set to off-screen)
  const mousePos = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    // Check if the user has enabled reduced motion in their system preferences
    const mediaQuery =
      window.matchMedia("(prefers-reduced-motion: reduce)") || null;

    // If the user prefers reduced motion, do not render the particles
    if (mediaQuery.matches) {
      return;
    }

    // Access the canvas element through the ref
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get the 2D rendering context for the canvas
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to resize the canvas based on the window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth; // Set canvas width to window width
      canvas.height = window.innerHeight; // Set canvas height to window height
    };

    // Call resizeCanvas initially and whenever the window resizes
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Array to hold all the particle objects
    const particles: Particle[] = [];

    // Function to determine how many particles should be on the screen
    const getParticleCount = () => {
      if (window.innerWidth < 800) return 50; // Fewer particles on small screens
      return 100; // More particles on larger screens
    };

    // Get the number of particles to be created
    const particleCount = getParticleCount();

    // Create and store particles with random positions and speeds
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width, // Random x position within canvas
        y: Math.random() * canvas.height, // Random y position within canvas
        size: Math.random() * 2 + 1, // Random size (between 1 and 3 pixels)
        speedX: Math.random() * 0.5 - 0.25, // Random initial speed in X direction
        speedY: Math.random() * 0.5 - 0.25, // Random initial speed in Y direction
      });
    }

    // Mouse move event listener to track mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current.x = event.clientX; // Update mouse X position
      mousePos.current.y = event.clientY; // Update mouse Y position
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Function to calculate the distance between two points
    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // Pythagorean theorem
    };

    const maxDistance = 100; // Max distance for particle interaction
    const mouseRepelForce = 0.05; // Force with which particles move away from the mouse
    const friction = 0.99; // Higher friction to slow particles but not stop them completely
    const minSpeed = 0.1; // Minimum speed threshold to ensure particles keep moving

    // Function to draw and update the particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Set particle fill color

      // Iterate over each particle
      particles.forEach((particle) => {
        // Draw each particle as a circle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Calculate distance between the mouse and the particle
        const dist = distance(
          particle.x,
          particle.y,
          mousePos.current.x,
          mousePos.current.y
        );

        // If the particle is within interaction range of the mouse
        if (dist < maxDistance) {
          // Calculate the direction in which the particle should move away from the mouse
          const angle = Math.atan2(
            particle.y - mousePos.current.y,
            particle.x - mousePos.current.x
          );

          // Apply a small force to push the particle away from the mouse
          particle.speedX += Math.cos(angle) * mouseRepelForce;
          particle.speedY += Math.sin(angle) * mouseRepelForce;
        }

        // Update particle position by its speed
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // If particle hits the horizontal bounds, reverse its horizontal speed (bounce effect)
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1; // Reverse direction
        }

        // If particle hits the vertical bounds, reverse its vertical speed (bounce effect)
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1; // Reverse direction
        }

        // Apply friction to gradually reduce the particle speed over time
        particle.speedX *= friction;
        particle.speedY *= friction;

        // Ensure that particles never completely stop by checking the minimum speed threshold
        if (Math.abs(particle.speedX) < minSpeed)
          particle.speedX = minSpeed * Math.sign(particle.speedX);
        if (Math.abs(particle.speedY) < minSpeed)
          particle.speedY = minSpeed * Math.sign(particle.speedY);
      });

      // Request the next frame to animate continuously
      requestAnimationFrame(drawParticles);
    };

    // Start the animation
    drawParticles();

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
