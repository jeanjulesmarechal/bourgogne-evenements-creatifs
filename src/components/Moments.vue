<script setup lang="ts">
import { onMounted } from 'vue'

const moments = [
  {
    id: 1,
    title: 'Séminaires d\'Entreprise',
    subtitle: 'Organisation et logistique de pointe',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQiafrHsCDabODNWK6y-0uPz5k43zdrMeFNlNaWm3nVZD3gD_G0wLXO2HMdgro57CPeGP7BC-3BksQ_IjANR4KlPjUgEiNvO3s-n2lUaAL2t5lnOVYBtMLBRz44p2P4wWIGVgObge2BlRum8W5eAvg5gDQ1Pjqb-_xzpTz4g0GiTb0G-5iUy2OU-ITJLWjFQ5qrUgwccO8L_0Ld7oapCmnNqAtGhKmjIMFlVKWnVE2BdyH8a4wVB6ulCw0ei7wAnIsOqjnr_XBbg'
  },
  {
    id: 2,
    title: 'Dîners de Gala',
    subtitle: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvqx0UD-vwWm1zg8-ZV3RAf7z4nhVtoOwTfmMXFjNP9XpULTrSAB2xHZMpRwlMJXag0Na_yT8Nn19tGLo8HbpO1xnXITJ4sJuVbh71TT7rsxOFID0xBxoyeBNLlg1XDTnqJPVFRDG9XRa-vA9G_xRTp9qyP5J_Dg6rbMMkYNyR8JoOFL6UybtLkfQeimymW88uinI9u0vHNaeTt25Fxe_PH-Y4qm7uSf9MDi1A6M8PtJG7f-HKfVipJ-Onc_AjkZ3Pu43qZ94OwQ'
  },
  {
    id: 3,
    title: 'Soirées Privées',
    subtitle: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7DaVAT9cj52m_q0EAxBdnU2LulilCduyKYzp2_-J9xnJtgNT9py-lX-PdOJmmN80_Z-hcso4-u0zIMwaszxNL5kk14e5ZlcSrmn6RLzgcAdSHFdhbVEg-qjneKak0YbCRHRmc6sGKLLv9_6wVMlcO7d9iWoJjqA6KLYC30EU8cbQoSqajLto3Vopng5tojj3ME0LlFKAfn80-IxtDr83dYUoEd4l7pyM6WEgWBtKy0c_-aTMhwYqe7ohV3bgNHSXRejZ-GvX5Aw'
  },
  {
    id: 4,
    title: 'Lancements de Produit',
    subtitle: 'Mise en scène spectaculaire',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNlDpH5IRHoPzLcAb5YOoBvjdLMZhpykDxLfCt3dulbraopKuiooyIaOrAmodaRzvKgbOBWKUplHpFJ18QIVsUEooPByEcmsqkfBbd48OxtvO8nxPRZaAyv_oJaPCmsEXrkbVmMiieEv59IQHZCeb0KVS-fOPMEysnqBlgIkn2WzJW3Up_1wLpRJ57y1W-ePieG6teJ_R0cL5cIsurgmXdlE4brFG5t5_nLmQXQBhJS3AUJvctZW0eU3XoeKKNstiBXK7DHtLiTw'
  }
]

onMounted(() => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, observerOptions)
  
  const cards = document.querySelectorAll('.moment-card')
  cards.forEach(card => observer.observe(card))
})
</script>

<template>
  <section class="moments">
    <div class="moments-background">
      <div class="ambient-light light-1"></div>
      <div class="ambient-light light-2"></div>
      <div class="ambient-light light-3"></div>
    </div>
    
    <div class="moments-container">
      <div class="section-header">
        <span class="section-label">
          <span class="label-line"></span>
          PORTFOLIO
          <span class="label-line"></span>
        </span>
        <h2 class="moments-title">
          <span class="title-word">Moments</span>
          <span class="title-word highlight">d'excellence</span>
        </h2>
      </div>

      <div class="moments-gallery">
        <div 
          v-for="(moment, index) in moments" 
          :key="moment.id" 
          class="moment-card"
          :class="`moment-${index + 1}`"
          :style="{ '--delay': index * 0.15 + 's', '--index': index }"
        >
          <div class="moment-glow"></div>
          <div class="moment-reflection"></div>
          
          <div class="moment-image-container">
            <div class="moment-image-wrapper">
              <div class="moment-image">
                <img :src="moment.image" :alt="moment.title" />
              </div>
              <div class="moment-image-overlay"></div>
              <div class="moment-gradient-mask"></div>
            </div>
          </div>
          
          <div class="moment-content-layer">
            <div class="moment-glass-overlay"></div>
            <div class="moment-content">
              <div class="moment-number-wrapper">
                <span class="moment-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <div class="moment-number-accent"></div>
              </div>
              <h3 class="moment-title">
                <span class="title-text">{{ moment.title }}</span>
              </h3>
              <p v-if="moment.subtitle" class="moment-subtitle">
                <span class="subtitle-text">{{ moment.subtitle }}</span>
              </p>
            </div>
          </div>
          
          <div class="moment-particles">
            <div class="particle" v-for="n in 8" :key="n" :style="{ '--particle-delay': n * 0.15 + 's' }"></div>
          </div>
          
          <div class="moment-border-frame">
            <div class="border-corner corner-tl"></div>
            <div class="border-corner corner-tr"></div>
            <div class="border-corner corner-bl"></div>
            <div class="border-corner corner-br"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.moments {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.moments-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.ambient-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0;
  animation: ambientPulse 30s ease-in-out infinite;
  pointer-events: none;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .ambient-light {
    animation: none;
    opacity: 0.2;
  }
}

.light-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(200, 100, 120, 0.2) 0%, transparent 70%);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.light-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(88, 26, 41, 0.15) 0%, transparent 70%);
  top: 60%;
  right: 10%;
  animation-delay: 7s;
}

.light-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(168, 61, 82, 0.12) 0%, transparent 70%);
  bottom: 15%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes ambientPulse {
  0%, 100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

.moments-container {
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
}

.section-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: #c86478;
  font-size: 0.85rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0;
  animation: fadeInDown 1s ease forwards;
}

.label-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c86478, transparent);
  opacity: 0.5;
}

.moments-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  letter-spacing: -2px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.title-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: titleReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.title-word:nth-child(1) {
  animation-delay: 0.3s;
}

.title-word:nth-child(2) {
  animation-delay: 0.6s;
}

.highlight {
  background: linear-gradient(135deg, #c86478 0%, #a83d52 50%, #c86478 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards, gradientShift 6s ease infinite;
  animation-delay: 0.6s, 0.6s;
  will-change: background-position;
}

@media (prefers-reduced-motion: reduce) {
  .highlight {
    animation: titleReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    animation-delay: 0.6s;
  }
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titleReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.moments-gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, minmax(80px, auto));
  gap: 1.5rem;
  padding: 2rem 0;
  max-width: 1400px;
  margin: 0 auto;
}

.moment-card {
  position: relative;
  overflow: visible;
  border-radius: 24px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.moment-card.in-view {
  animation: cardReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--delay);
}

@keyframes cardReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.moment-card:hover {
  transform: translateY(-8px) scale(1.01);
  z-index: 10;
}

/* Disposition artistique sophistiquée */
.moment-1 {
  grid-column: 2 / 7;
  grid-row: 1 / 5;
}

.moment-2 {
  grid-column: 7 / 12;
  grid-row: 1 / 4;
}

.moment-3 {
  grid-column: 2 / 6;
  grid-row: 5 / 9;
}

.moment-4 {
  grid-column: 6 / 12;
  grid-row: 4 / 9;
}

.moment-glow {
  position: absolute;
  inset: -20px;
  border-radius: 30px;
  background: radial-gradient(
    circle at center,
    rgba(200, 100, 120, 0.15) 0%,
    rgba(88, 26, 41, 0.08) 40%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: -1;
  filter: blur(30px);
}

.moment-card:hover .moment-glow {
  opacity: 0.6;
}

.moment-reflection {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 3;
  mix-blend-mode: overlay;
}

.moment-card:hover .moment-reflection {
  opacity: 1;
}

.moment-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  background: #0a0a0a;
  transform-style: preserve-3d;
}

.moment-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.moment-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.moment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease;
  filter: brightness(0.8) contrast(1.05);
  transform-origin: center;
  will-change: transform;
}

.moment-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.85) 100%
  );
  opacity: 1;
  transition: opacity 0.6s ease;
  z-index: 1;
}

.moment-gradient-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(200, 100, 120, 0.05) 0%,
    transparent 50%,
    rgba(88, 26, 41, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 2;
  mix-blend-mode: overlay;
}

.moment-card:hover .moment-image img {
  transform: scale(1.08);
  filter: brightness(0.95) contrast(1.1);
}

.moment-card:hover .moment-image-overlay {
  opacity: 0.7;
}

.moment-card:hover .moment-gradient-mask {
  opacity: 0.2;
}

.moment-content-layer {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3.5rem;
  z-index: 4;
  pointer-events: none;
  border-radius: 24px;
}

.moment-glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.2) 80%,
    transparent 100%
  );
  backdrop-filter: blur(1px);
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 24px;
}

.moment-card:hover .moment-glass-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.3) 80%,
    transparent 100%
  );
  backdrop-filter: blur(2px);
}

.moment-content {
  position: relative;
  z-index: 5;
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.moment-card:hover .moment-content {
  transform: translateY(-6px);
}

.moment-number-wrapper {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
  opacity: 0.7;
  transition: opacity 0.5s ease;
}

.moment-card:hover .moment-number-wrapper {
  opacity: 1;
}

.moment-number {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 4px;
  font-weight: 300;
  transition: color 0.5s ease;
  font-variant-numeric: tabular-nums;
}

.moment-card:hover .moment-number {
  color: rgba(255, 255, 255, 1);
}

.moment-number-accent {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(200, 100, 120, 0.5) 0%, transparent 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.moment-card:hover .moment-number-accent {
  transform: scaleX(1);
}

.moment-title {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 400;
  color: var(--white);
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.title-text {
  display: inline-block;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.moment-card:hover .title-text {
  transform: translateY(-2px);
}

.moment-subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-top: 0.5rem;
  overflow: hidden;
}

.subtitle-text {
  display: inline-block;
  opacity: 0.9;
  transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.moment-card:hover .subtitle-text {
  opacity: 1;
}

.moment-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 6;
  opacity: 0;
  transition: opacity 0.6s ease;
  border-radius: 24px;
}

.moment-card:hover .moment-particles {
  opacity: 1;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(200, 100, 120, 0.7);
  border-radius: 50%;
  animation: particleFloat 6s ease-in-out infinite;
  animation-delay: var(--particle-delay);
  box-shadow: 0 0 6px rgba(200, 100, 120, 0.8);
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .moment-particles {
    display: none;
  }
}

.particle:nth-child(odd) {
  left: 15%;
  top: 25%;
}

.particle:nth-child(even) {
  right: 20%;
  bottom: 30%;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translate(25px, -40px) scale(1.8);
    opacity: 1;
  }
}

.moment-border-frame {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  pointer-events: none;
  z-index: 7;
  overflow: hidden;
}

.border-corner {
  position: absolute;
  display: none;
}

.corner-tl {
  top: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-tl::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 40px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-tr {
  top: 0;
  right: 0;
  width: 40px;
  height: 2px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-tr::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 40px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-bl {
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-bl::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2px;
  height: 40px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-br {
  bottom: 0;
  right: 0;
  width: 40px;
  height: 2px;
  background: rgba(200, 100, 120, 0.6);
}

.corner-br::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2px;
  height: 40px;
  background: rgba(200, 100, 120, 0.6);
}


/* Responsive */
@media (max-width: 1400px) {
  .moments-gallery {
    gap: 1.5rem;
  }
}

@media (max-width: 1200px) {
  .moments-gallery {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, minmax(70px, auto));
    gap: 1.2rem;
    max-width: 1200px;
  }

  .moment-1 {
    grid-column: 2 / 5;
    grid-row: 1 / 5;
  }

  .moment-2 {
    grid-column: 5 / 8;
    grid-row: 1 / 4;
  }

  .moment-3 {
    grid-column: 2 / 4;
    grid-row: 5 / 9;
  }

  .moment-4 {
    grid-column: 4 / 8;
    grid-row: 4 / 9;
  }
}

@media (max-width: 768px) {
  .moments {
    padding: 5rem 1.5rem;
  }

  .section-header {
    margin-bottom: 4rem;
  }

  .moments-title {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  .moments-gallery {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(16, minmax(60px, auto));
    gap: 1rem;
    padding: 1rem 0;
  }

  .moment-1 {
    grid-column: 1 / 5;
    grid-row: 1 / 5;
  }

  .moment-2 {
    grid-column: 1 / 5;
    grid-row: 5 / 9;
  }

  .moment-3 {
    grid-column: 1 / 5;
    grid-row: 9 / 13;
  }

  .moment-4 {
    grid-column: 1 / 5;
    grid-row: 13 / 17;
  }

  .moment-content-layer {
    padding: 2.5rem;
  }


  .moment-subtitle {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .moments {
    padding: 4rem 1rem;
  }

  .moments-title {
    font-size: 2rem;
  }

  .moments-gallery {
    gap: 0.8rem;
  }

  .moment-content-layer {
    padding: 2rem;
  }


  .moment-number {
    font-size: 0.9rem;
  }
}
</style>
