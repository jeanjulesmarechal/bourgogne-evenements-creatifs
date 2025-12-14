import { useEffect, useRef } from 'react';

/**
 * Composant pour créer un gradient blanc flou avec noise sur V2 desktop
 */
const WhiteGradientBackground = () => {
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

    // Générer le noise (grain) subtil en blanc
    const generateNoise = () => {
      const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const opacity = Math.random() * 8; // Noise subtil
        data[i] = 255;     // R
        data[i + 1] = 255; // G
        data[i + 2] = 255; // B
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
      time += 0.003;

      // Gradient blanc flou animé
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const pulse = 1 + Math.sin(time) * 0.15; // Pulsation douce
      const radius = Math.max(canvas.width, canvas.height) * 1.2 * pulse;

      // Plusieurs gradients radiaux blancs superposés pour un effet flou
      const gradient1 = ctx.createRadialGradient(
        centerX * 0.6,
        centerY * 0.5,
        0,
        centerX * 0.6,
        centerY * 0.5,
        radius * 0.5
      );
      gradient1.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      gradient1.addColorStop(0.3, 'rgba(255, 255, 255, 0.22)');
      gradient1.addColorStop(0.6, 'rgba(255, 255, 255, 0.12)');
      gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');

      const gradient2 = ctx.createRadialGradient(
        centerX * 1.4,
        centerY * 1.3,
        0,
        centerX * 1.4,
        centerY * 1.3,
        radius * 0.4
      );
      gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradient2.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
      gradient2.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
      gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');

      const gradient3 = ctx.createRadialGradient(
        centerX * 0.4,
        centerY * 1.4,
        0,
        centerX * 0.4,
        centerY * 1.4,
        radius * 0.35
      );
      gradient3.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
      gradient3.addColorStop(0.5, 'rgba(255, 255, 255, 0.18)');
      gradient3.addColorStop(1, 'rgba(255, 255, 255, 0)');

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
    }, 120);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(noiseInterval);
    };
  }, []);

  return (
    <>
      {/* Canvas principal avec gradient blanc flou - Desktop uniquement */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
        style={{ mixBlendMode: 'overlay', opacity: 0.4 }}
      />
      
      {/* Canvas pour le noise (grain) blanc - Desktop uniquement */}
      <canvas
        ref={noiseCanvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
        style={{ mixBlendMode: 'overlay', opacity: 0.25 }}
      />
    </>
  );
};

export default WhiteGradientBackground;

