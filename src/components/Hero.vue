<script setup lang="ts">
const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="accueil" class="hero">
    <div class="hero-background">
      <img
        src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Événement"
        class="hero-image"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="hero-title">Eclosion, votre événement est né</h1>
      <p class="hero-subtitle">
        Avec l’Agence Eclosion , vivez l'excellence événementielle sur mesure
      </p>
      <button class="hero-cta" @click="scrollToContact">Obtenir un devis</button>
    </div>

    <div class="scroll-indicator">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 5v14M19 12l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  padding-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 8s ease-in-out infinite;
  pointer-events: none;
  z-index: 2;
}

@media (prefers-reduced-motion: reduce) {
  .hero-background::after {
    animation: none;
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: 
    fadeInScale 1.5s ease-out,
    elegantMotion 25s ease-in-out infinite;
  will-change: transform, opacity;
  transform-origin: center center;
}

@media (prefers-reduced-motion: reduce) {
  .hero-image {
    animation: fadeInScale 1.5s ease-out;
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes elegantMotion {
  0%, 100% {
    transform: scale(1) translate(0, 0);
  }
  20% {
    transform: scale(1.06) translate(-1.2%, -0.8%);
  }
  40% {
    transform: scale(1.1) translate(0, -1.5%);
  }
  60% {
    transform: scale(1.06) translate(1.2%, -0.8%);
  }
  80% {
    transform: scale(1.08) translate(0.5%, 0.5%);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at center, rgba(88, 26, 41, 0.3) 0%, rgba(15, 15, 15, 0.6) 70%),
    linear-gradient(180deg, rgba(15, 15, 15, 0.4) 0%, rgba(15, 15, 15, 0.7) 100%);
  backdrop-filter: blur(1px);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  animation: slideInUp 0.8s ease-out;
}

.hero-content::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(ellipse at center, rgba(200, 100, 120, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
  animation: pulseGlow 8s ease-in-out infinite;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .hero-content::before {
    animation: none;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 400;
  letter-spacing: -1px;
  text-shadow: 
    0 2px 20px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(200, 100, 120, 0.2);
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-cta {
  background: rgba(88, 26, 41, 0.85);
  color: var(--white);
  padding: 1rem 2.5rem;
  border: 1px solid rgba(168, 61, 82, 0.4);
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-cta:hover {
  background: rgba(168, 61, 82, 0.9);
  border-color: rgba(200, 100, 120, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.hero-cta:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: var(--white);
  animation: bounce 3s infinite;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .scroll-indicator {
    animation: none;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 1024px) {
  .hero {
    padding-top: 80px;
  }
  
  .hero-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 85vh;
    padding-top: 60px;
    min-height: 500px;
  }

  .hero-content {
    padding: 1rem;
  }

  .hero-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    margin-bottom: 2rem;
  }

  .hero-cta {
    padding: 0.8rem 2rem;
    font-size: 0.85rem;
    width: 100%;
    max-width: 300px;
  }

  .scroll-indicator {
    bottom: 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 80vh;
    padding-top: 50px;
    min-height: 450px;
  }

  .hero-content {
    padding: 0.8rem;
  }

  .hero-title {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .hero-cta {
    padding: 0.7rem 1.5rem;
    font-size: 0.8rem;
  }
}
</style>
