import React, { useEffect, useRef } from "react";

interface NeuralNetworkProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  backgroundColor?: string;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  className = "",
  dotColor = "#00c2ff",
  lineColor = "#00c2ff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Density configuration
    // Adjust these to control how many nodes appear
    const PARTICLE_DENSITY = 0.0001; // Particles per pixel squared
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 200;

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Random velocity between -0.5 and 0.5
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1; // Size between 1 and 3
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (gentle repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_RADIUS) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const directionX = forceDirectionX * force * 0.5; // Strength
          const directionY = forceDirectionY * force * 0.5;

          this.vx -= directionX;
          this.vy -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = 0.6;
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight;

      const area = width * height;
      const numParticles = Math.floor(area * PARTICLE_DENSITY);

      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const b = particles[i];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            // Opacity based on distance
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.globalAlpha = opacity * 0.2; // Keep lines subtle
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className}`}
      style={{ display: "block" }}
    />
  );
};

export default NeuralNetwork;
