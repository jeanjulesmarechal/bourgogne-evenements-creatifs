<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const showImageModal = ref(false)

const scrollToDownloadPdf = () => {
  // Afficher le PDF dans la modale
  showImageModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  showImageModal.value = false
  document.body.style.overflow = ''
}

const handleModalOverlayClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('image-modal-overlay')) {
    closeImageModal()
  }
}

let imageElement: HTMLElement | null = null

let lastScrollY = 0

const handleScroll = () => {
  if (!imageElement) return
  
  // Réduire l'effet parallax sur mobile pour les performances
  const isMobile = window.innerWidth < 768
  if (isMobile) return
  
  // Throttle pour améliorer les performances
  const currentScrollY = window.scrollY
  if (Math.abs(currentScrollY - lastScrollY) < 5) return
  lastScrollY = currentScrollY
  
  const rect = imageElement.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Appliquer l'effet parallax uniquement quand l'élément est visible
  if (rect.top < windowHeight && rect.bottom > 0) {
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = windowHeight / 2
    const distanceFromCenter = elementCenter - viewportCenter
    
    // Réduire l'intensité du parallax pour améliorer les performances
    const parallaxValue = distanceFromCenter * 0.08
    
    const img = imageElement.querySelector('.main-image') as HTMLElement
    if (img) {
      img.style.transform = `translateY(${parallaxValue}px)`
    }
  }
}

onMounted(() => {
  imageElement = document.querySelector('.why-choose-image') as HTMLElement
  
  // Utiliser requestAnimationFrame pour de meilleures performances
  let ticking = false
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true })
  handleScroll() // Appel initial
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="pourquoi" class="why-choose">
    <div class="why-choose-container">
      <div class="why-choose-content">
        <div class="why-choose-image scroll-reveal-left">
          <div class="image-wrapper">
            <div class="image-overlay"></div>
            <div class="image-shine"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqZvm5fIS656fsUPehay8Ola8x1jVyu6c2j5sw1gyZveWFKzKQ65G88pAKrYmSXwDaUus1NO8rPy-VKw4GeClTnKgNnxcGr-iIH0E3W-zFp1cu2YLuV9KzcGfuXsqkKGHzkU0q-zDmEVogBNmupVAsp9nhHnRHYba1bMnb0BFEmIgiRF1RaAswsfqHAlfar7hLy_U_gu1GKsTf3W1WPqymbTq5NmR-DTE3OVkSN5KMDua_6f6fRg2iUQM6SPQOayAlg3oHn2niqw"
              alt="Événement premium - Excellence et professionnalisme"
              class="main-image"
            />
            <div class="image-glow"></div>
            <div class="floating-elements">
              <div class="floating-element element-1"></div>
              <div class="floating-element element-2"></div>
              <div class="floating-element element-3"></div>
            </div>
          </div>
        </div>

        <div class="why-choose-text scroll-reveal-right">
          <span class="section-tag">Notre différence</span>
          <h2>Pourquoi nous choisir</h2>

          <p class="main-quote">
            "Un événement réussi est la somme d'une stratégie rigoureuse et d'une créativité
            sans compromis."
          </p>

          <p class="description">
            C'est cette dualité qui nous permet de concevoir des expériences mémorables et
            efficaces pour nos clients, en transformant chaque détail en une opportunité
            d'émotion.
          </p>

          <a href="/2026_01_Présentation_ECLOSION_WEB.pdf" target="_blank" class="pdf-button" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.8rem;">
            <span class="icon">↓</span>
            Visualiser ou Télécharger notre plaquette
          </a>
        </div>
      </div>

      <!-- Section L'Excellence Eclosion -->
      <div class="excellence-section">
        <div class="excellence-header scroll-reveal">
          <h2 class="excellence-title">L'Excellence Eclosion</h2>
          <p class="excellence-subtitle">
            Nous allions précision logistique et vision artistique pour sublimer chaque instant.
          </p>
        </div>

        <div class="excellence-cards">
          <div class="excellence-card scroll-reveal-scale">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
            <h3 class="card-title">Stratégie Rigoureuse</h3>
            <p class="card-description">
              Une planification millimétrée pour une exécution sans faille, assurant la sérénité de chaque étape.
            </p>
          </div>

          <div class="excellence-card scroll-reveal-scale">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="card-title">Créativité Sans Compromis</h3>
            <p class="card-description">
              Des concepts uniques qui repoussent les limites de l'imaginaire pour surprendre vos invités.
            </p>
          </div>

          <div class="excellence-card scroll-reveal-scale">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9l4-6zM6 3l4 6M18 3l-4 6M6 9l6 12M18 9l-6 12"/>
              </svg>
            </div>
            <h3 class="card-title">Expériences Mémorables</h3>
            <p class="card-description">
              Des moments qui marquent les esprits durablement et renforcent votre image de marque.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modale pour afficher l'image -->
  <Teleport to="body">
    <Transition name="image-modal">
      <div v-if="showImageModal" class="image-modal-overlay" @click="handleModalOverlayClick">
        <div class="image-modal-container">
          <button class="image-modal-close" @click="closeImageModal" aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <iframe src="/2026_01_Présentation_ECLOSION_WEB.pdf" class="image-modal-img" style="width: 100%; height: 90vh; border: none;"></iframe>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.why-choose {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
}

.why-choose-container {
  max-width: 1400px;
  margin: 0 auto;
}

.why-choose-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-choose-image {
  position: relative;
  overflow: visible;
  border-radius: 20px;
  aspect-ratio: 4 / 3;
  perspective: 1000px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(168, 61, 82, 0.2);
  box-shadow: 
    0 20px 60px rgba(88, 26, 41, 0.4),
    0 0 40px rgba(168, 61, 82, 0.2),
    inset 0 0 60px rgba(168, 61, 82, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  background: linear-gradient(135deg, rgba(88, 26, 41, 0.3), rgba(168, 61, 82, 0.1));
}

.why-choose-image:hover .image-wrapper {
  transform: translateY(-8px) rotateX(2deg);
  border-color: rgba(168, 61, 82, 0.5);
  box-shadow: 
    0 30px 80px rgba(88, 26, 41, 0.5),
    0 0 60px rgba(168, 61, 82, 0.3),
    0 0 100px rgba(200, 100, 120, 0.15),
    inset 0 0 80px rgba(168, 61, 82, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0.95) contrast(1.05) saturate(1.1);
  will-change: transform;
}

.why-choose-image:hover .main-image {
  filter: brightness(1.05) contrast(1.1) saturate(1.15);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(88, 26, 41, 0.3) 0%,
    transparent 40%,
    transparent 60%,
    rgba(168, 61, 82, 0.2) 100%
  );
  z-index: 2;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.why-choose-image:hover .image-overlay {
  opacity: 0.7;
}

.image-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: rotate(45deg);
  animation: shine 6s infinite;
  z-index: 3;
  pointer-events: none;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .image-shine {
    animation: none;
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(168, 61, 82, 0.4) 0%,
    rgba(88, 26, 41, 0.2) 40%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 0;
  pointer-events: none;
  filter: blur(30px);
}

.why-choose-image:hover .image-glow {
  opacity: 1;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(168, 61, 82, 0.6) 0%,
    rgba(88, 26, 41, 0.3) 50%,
    transparent 100%
  );
  filter: blur(20px);
  animation: float 10s ease-in-out infinite;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .floating-element {
    animation: none;
    opacity: 0.3;
  }
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.element-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  33% {
    transform: translate(20px, -30px) scale(1.1);
    opacity: 0.6;
  }
  66% {
    transform: translate(-15px, 20px) scale(0.9);
    opacity: 0.5;
  }
}

.why-choose-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-tag {
  display: inline-block;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  width: fit-content;
}

.why-choose-text h2 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 400;
  letter-spacing: -1px;
  margin: 0;
}

.main-quote {
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-style: italic;
  color: var(--accent);
  line-height: 1.6;
}

.description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.pdf-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(88, 26, 41, 0.85);
  color: var(--white);
  padding: 1rem 2rem;
  border: 1px solid rgba(168, 61, 82, 0.4);
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  width: fit-content;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.pdf-button:hover {
  background: rgba(168, 61, 82, 0.9);
  border-color: rgba(200, 100, 120, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.pdf-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .why-choose-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .why-choose {
    padding: 4rem 1.5rem;
  }

  .why-choose-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .why-choose-image {
    order: 1;
  }

  .why-choose-image:hover .image-wrapper {
    transform: translateY(-4px);
  }

  .floating-elements {
    display: none; /* Désactiver les éléments flottants sur mobile pour les performances */
  }

  .image-shine {
    animation-duration: 4s; /* Ralentir l'animation sur mobile */
  }

  .why-choose-text {
    order: 2;
  }



  .description {
    font-size: 1rem;
  }

  .pdf-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .why-choose {
    padding: 3rem 1rem;
  }

  .why-choose-image {
    border-radius: 16px;
  }

  .image-wrapper {
    border-radius: 16px;
    border-width: 1px;
  }

  .why-choose-image:hover .image-wrapper {
    transform: translateY(-2px);
  }



  .description {
    font-size: 0.9rem;
  }

  .pdf-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
  }
}

/* Section Excellence Eclosion */
.excellence-section {
  margin-top: 6rem;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(88, 26, 41, 0.4) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(88, 26, 41, 0.3) 100%);
  border-radius: 16px;
  border: 1px solid rgba(168, 61, 82, 0.15);
  position: relative;
  overflow: hidden;
}

.excellence-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(168, 61, 82, 0.5), transparent);
}

.excellence-section::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(168, 61, 82, 0.1) 0%, transparent 70%);
  animation: pulse 12s ease-in-out infinite;
  pointer-events: none;
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .excellence-section::after {
    animation: none;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.excellence-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
}

.excellence-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 400;
  letter-spacing: -2px;
  margin: 0 0 1.5rem 0;
  font-family: 'Prata', serif;
  text-shadow: 0 2px 20px rgba(168, 61, 82, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: rgba(255, 255, 255, 0.98); /* Fallback pour les navigateurs qui ne supportent pas background-clip */
}

.excellence-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: 0.3px;
}

.excellence-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.excellence-card {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 61, 82, 0.2);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.excellence-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(168, 61, 82, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.excellence-card:hover::before {
  opacity: 1;
}

.excellence-card:hover {
  border-color: rgba(168, 61, 82, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(88, 26, 41, 0.4), 0 0 40px rgba(168, 61, 82, 0.2);
  background: rgba(30, 20, 25, 0.8);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 61, 82, 0.15);
  border-radius: 50%;
  border: 1px solid rgba(168, 61, 82, 0.3);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.card-icon::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(168, 61, 82, 0.5), rgba(88, 26, 41, 0.5));
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.excellence-card:hover .card-icon {
  background: linear-gradient(135deg, rgba(168, 61, 82, 0.3), rgba(200, 100, 120, 0.2));
  border-color: rgba(168, 61, 82, 0.6);
  color: rgba(255, 255, 255, 0.95);
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(168, 61, 82, 0.4);
}

.excellence-card:hover .card-icon::after {
  opacity: 1;
}

.card-icon svg {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: all 0.5s ease;
}

.excellence-card:hover .card-icon svg {
  filter: drop-shadow(0 4px 8px rgba(168, 61, 82, 0.5));
}

.card-title {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 500;
  margin: 0 0 1.25rem 0;
  color: rgba(255, 255, 255, 0.98);
  font-family: 'Prata', serif;
  letter-spacing: -0.5px;
  transition: color 0.5s ease;
  position: relative;
  z-index: 1;
}

.excellence-card:hover .card-title {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 2px 10px rgba(168, 61, 82, 0.3);
}

.card-description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin: 0;
  font-weight: 300;
  transition: color 0.5s ease;
  position: relative;
  z-index: 1;
}

.excellence-card:hover .card-description {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 1024px) {
  .excellence-cards {
    gap: 2rem;
  }


  .excellence-card {
    padding: 2.5rem 2rem;
  }

  .card-icon {
    width: 70px;
    height: 70px;
  }

  .card-icon svg {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 768px) {
  .excellence-section {
    margin-top: 4rem;
    padding: 4rem 1.5rem;
    border-radius: 12px;
  }

  .excellence-header {
    margin-bottom: 3.5rem;
  }


  .excellence-subtitle {
    font-size: 1.05rem;
  }

  .excellence-cards {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .excellence-card {
    padding: 2.5rem 2rem;
  }

  .card-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .excellence-section {
    margin-top: 3rem;
    padding: 3rem 1rem;
  }

  .excellence-header {
    margin-bottom: 3rem;
  }


  .excellence-subtitle {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .excellence-card {
    padding: 2rem 1.5rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1.25rem;
  }

  .card-icon svg {
    width: 30px;
    height: 30px;
  }


  .card-description {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}

/* Modale d'image */
.image-modal-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999 !important;
  padding: 2rem;
  overflow-y: auto;
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
}

.image-modal-container {
  position: relative !important;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000 !important;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
}

.image-modal-img {
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
}

.image-modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000001 !important;
}

.image-modal-close:hover {
  background: rgba(160, 61, 82, 0.3);
  border-color: rgba(160, 61, 82, 0.5);
  color: #c86478;
  transform: rotate(90deg);
}

.image-modal-close svg {
  width: 20px;
  height: 20px;
}

.image-modal-enter-active,
.image-modal-leave-active {
  transition: opacity 0.3s ease;
}

.image-modal-enter-active .image-modal-container,
.image-modal-leave-active .image-modal-container {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.image-modal-enter-from {
  opacity: 0;
}

.image-modal-enter-from .image-modal-container {
  opacity: 0;
  transform: scale(0.9);
}

.image-modal-leave-to {
  opacity: 0;
}

.image-modal-leave-to .image-modal-container {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .image-modal-overlay {
    padding: 1rem;
  }

  .image-modal-container {
    max-width: 95vw;
  }

  .image-modal-img {
    max-height: 85vh;
  }

  .image-modal-close {
    top: -40px;
    width: 36px;
    height: 36px;
  }
}
</style>
