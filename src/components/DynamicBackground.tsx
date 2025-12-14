import { useEffect, useRef } from 'react';

/**
 * Composant pour créer un fond dynamique avec gradient subtil
 * Utilise la couleur rouge bordeaux (#611427) de la marque ECLOSION
 */
const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseCanvasRef.current;
    if (!canvas || !noiseCanvas) return;

    const ctx = canvas.getContext('2d');
    const noiseCtx = noiseCanvas.getContext('2d');
    if (!ctx || !noiseCtx) return;

    // Ajuster la taille des canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      noiseCanvas.width = window.innerWidth;
      noiseCanvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Générer le noise (grain) subtil
    const generateNoise = () => {
      const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const opacity = Math.random() * 5; // Très subtil
        data[i] = 97;     // R
        data[i + 1] = 20; // G
        data[i + 2] = 39; // B
        data[i + 3] = opacity;
      }
      
      noiseCtx.putImageData(imageData, 0, 0);
    };

    // Générer le noise initial
    generateNoise();

    let time = 0;
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Gradient subtil animé qui pulse légèrement
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const pulse = 1 + Math.sin(time) * 0.1; // Légère pulsation
      const radius = Math.max(canvas.width, canvas.height) * 0.8 * pulse;

      // Plusieurs gradients radiaux superposés pour un effet doux
      const gradient1 = ctx.createRadialGradient(
        centerX * 0.7,
        centerY * 0.6,
        0,
        centerX * 0.7,
        centerY * 0.6,
        radius * 0.6
      );
      gradient1.addColorStop(0, 'rgba(97, 20, 39, 0.08)');
      gradient1.addColorStop(0.5, 'rgba(97, 20, 39, 0.04)');
      gradient1.addColorStop(1, 'rgba(97, 20, 39, 0)');

      const gradient2 = ctx.createRadialGradient(
        centerX * 1.3,
        centerY * 1.2,
        0,
        centerX * 1.3,
        centerY * 1.2,
        radius * 0.5
      );
      gradient2.addColorStop(0, 'rgba(97, 20, 39, 0.06)');
      gradient2.addColorStop(0.5, 'rgba(97, 20, 39, 0.03)');
      gradient2.addColorStop(1, 'rgba(97, 20, 39, 0)');

      const gradient3 = ctx.createRadialGradient(
        centerX * 0.5,
        centerY * 1.3,
        0,
        centerX * 0.5,
        centerY * 1.3,
        radius * 0.4
      );
      gradient3.addColorStop(0, 'rgba(97, 20, 39, 0.05)');
      gradient3.addColorStop(0.5, 'rgba(97, 20, 39, 0.02)');
      gradient3.addColorStop(1, 'rgba(97, 20, 39, 0)');

      // Dessiner les gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Régénérer le noise périodiquement pour animation
    const noiseInterval = setInterval(() => {
      generateNoise();
    }, 150);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(noiseInterval);
    };
  }, []);

  return (
    <>
      {/* Canvas principal avec gradient subtil */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: 'multiply', opacity: 0.6 }}
      />
      
      {/* Canvas pour le noise (grain) très subtil */}
      <canvas
        ref={noiseCanvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: 'overlay', opacity: 0.15 }}
      />
    </>
  );
};

export default DynamicBackground;
