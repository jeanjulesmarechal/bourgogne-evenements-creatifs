<script setup lang="ts">
const expertises = [
  {
    id: 1,
    title: 'Accompagnement Premium',
    description: 'Un interlocuteur unique dédié à votre sérénité. Nous assurons une gestion de projet fluide, proactive et une disponibilité absolue.',
    iconType: 'handshake',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPTzOC1PDlSGoJEnJ597_lPdZFn2RnmPx6ZzJC1NVDpcN_y2DIj4jviE5adOABj66K8RdT5XAvJgbgF86AEYOR9-iw2KF5On1firZOqZHONkvOH8rGmGcybcpQNbsjkUG_WFpFYjoX0sR9Laj1y9XcmD9Eeuo031OHprNtxS3vsIY0B2xf86qF5XMvzy44Aj7yFWC4TnqbE5ByhJpPPmF35S4LFPq5A0-Sc_dSmJr8h2Qm3HR6MhdmR0gIGRFtwZkySaVl6C5JA'
  },
  {
    id: 2,
    title: 'Créativité &<br/>Sur-Mesure',
    description: 'Des concepts audacieux imaginés pour sublimer l\'identité de votre marque. Chaque scénographie est une œuvre unique.',
    iconType: 'diamond',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAedvSSuXE0Fm83-ffw_EoJ5JL5znwqDasncKWsIrT1LABeoDV26wV5tHIOjD0C18o-xVSBIG-OXntyzC1mG-_b-ZgponYXLKW7HMonhHzETRCKz_qjAVqRtRPf9SbWDkJYXq_EMJopNoNWYRY1rFXVjENV86ZQLa-2xXlSfiOup-En7QUTLdqoY7t2QVxbBxW-3EStEkb60WlfNppRr8L01Cl0oOFC5uqANCjkFVqGhqQ2xYw37Nk5sNjkhpQRwDRXxi1I_qNXFQ'
  },
  {
    id: 3,
    title: 'Flexibilité &<br/>Réactivité',
    description: 'L\'agilité est notre force. Une adaptation constante aux imprévus et une capacité à rebondir sur de nouvelles opportunités.',
    iconType: 'bolt',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAerP9RM0dDthNzLXBXrEteynGhF2qHlwy_mGGLUo1VkugWOr9nNUO7LYgByIDGA_ohSrSAY-w98h6c4JbRwsWYiS3hwCvBKoJV_gjsPtOR5U9xYpPttIEQIzw-XJv_pRsKHnJIUeB3jxv-eBwbK52_kHQjuXpbvsoebCUCNyIBek32xshnfo_J7hfH9Tan074Uzg57DY97N9D0abgYeHO0aiQjx5hcBYgV-ijkoRUpTX0nGTde_eHgF6Tqwk1KUmOFBJaTRaw7Zw'
  },
  {
    id: 4,
    title: 'Excellence<br/>Opérationnelle',
    description: 'Une logistique millimétrée et une rigueur absolue. Nous orchestrons l\'invisible pour que la magie opère sans fausse note.',
    iconType: 'verified',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmy71-vefR9DDVvvCdywhnnPdtnmv9OD0FlpWsO3iWd4bYl9x2oNv14enQkzlKgZ23skl9JIawKWiAUrS_2Z_mXiwIHdlppwS625S8-DaJFl1wBdA1QlJD-oGjFJibZZmKHB7sGSwl4EyDbi3JfgSo-dJgT9GJM3fyI8_SQw3CIMnwwopQ1BGiRAAwjvpJ0CW0B5tRjcdThCu9Ty2sLJ_TdxB8d022MesFACaL8qlA-Psm5su-S_MB437K1UP4nm3LIlixFBT4VQ'
  }
]

const getIcon = (iconType: string) => {
  const icons: Record<string, string> = {
    diamond: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/>
      <path d="M7 18h1a2 2 0 0 0 2-2v-5"/>
      <path d="M14 9V7a2 2 0 0 1 2-2h1"/>
      <path d="M17 12h.01"/>
      <path d="M21 12h.01"/>
      <path d="M21 18h.01"/>
      <path d="M22 22l-5-10-5 10"/>
    </svg>`,  
    handshake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 3h12l4 6-10 12L2 9z"/>
      <path d="M11 3L8 9l4 9 4-9-3-6"/>
      <path d="M2 9h20"/>
    </svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
    verified: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>`
  }
  return icons[iconType] || ''
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="expertise" class="expertise">
    <div class="expertise-container">
      <div class="expertise-header scroll-reveal">
        <h2 class="expertise-main-title">l'événementiel Haute Couture</h2>
        <p class="expertise-intro">
          Nous façonnons des moments d'exception où chaque détail compte. Découvrez les quatre
          dimensions qui font la singularité de notre approche.
        </p>
      </div>

      <div class="expertise-grid">
        <div v-for="expertise in expertises" :key="expertise.id" class="expertise-card group scroll-reveal-scale">
          <div class="expertise-image-wrapper">
            <div class="expertise-gradient-overlay"></div>
            <div class="expertise-image-bg" :style="{ backgroundImage: `url(${expertise.image})` }"></div>
          </div>
          <div class="expertise-content-wrapper">
            <div class="expertise-icon" v-html="getIcon(expertise.iconType)"></div>
            <div class="expertise-content">
              <h3 v-html="expertise.title"></h3>
              <div class="expertise-underline"></div>
              <p class="expertise-description">{{ expertise.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="expertise-cta scroll-reveal">
        <h3>Votre événement mérite l'exceptionnel</h3>
        <p>Chaque détail compte, chaque instant compte. Transformons votre vision en moments inoubliables qui marqueront les esprits et resteront gravés dans les mémoires.</p>
        <button class="cta-button" @click="scrollToContact">Créons ensemble votre événement</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
}

.expertise-container {
  max-width: 1400px;
  margin: 0 auto;
}

.expertise-header {
  text-align: center;
  margin-bottom: 4rem;
}

.expertise-main-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 400;
  letter-spacing: -2px;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.95);
  font-family: 'Prata', serif;
}

.expertise-intro {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.expertise-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  min-height: 400px;
}

.expertise-card:hover {
  box-shadow: 0 20px 40px rgba(200, 100, 120, 0.2);
}

.expertise-image-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
  transition: transform 0.5s ease;
  will-change: transform;
}

.expertise-card:hover .expertise-image-wrapper {
  transform: scale(1.05);
}

.expertise-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
  z-index: 10;
}

.expertise-image-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  mix-blend-mode: overlay;
  filter: grayscale(100%);
  transition: filter 0.4s ease, opacity 0.4s ease;
  will-change: filter;
}

.expertise-card:hover .expertise-image-bg {
  filter: grayscale(0%);
}

.expertise-content-wrapper {
  position: relative;
  z-index: 20;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.expertise-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: auto;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.expertise-icon svg {
  width: 26px;
  height: 26px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.expertise-card:hover .expertise-icon {
  background: linear-gradient(135deg, #c86478 0%, #d47588 100%);
  border-color: #c86478;
  transform: scale(1.08);
  box-shadow: 0 4px 16px rgba(200, 100, 120, 0.4);
  color: var(--white);
}

.expertise-content {
  transform: translateY(1rem);
  transition: transform 0.4s ease;
  will-change: transform;
}

.expertise-card:hover .expertise-content {
  transform: translateY(0);
}

.expertise-content h3 {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.expertise-underline {
  height: 2px;
  width: 48px;
  background: #c86478;
  margin-bottom: 1rem;
  transition: width 0.5s ease;
}

.expertise-card:hover .expertise-underline {
  width: 100%;
}

.expertise-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.6;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.5s ease 0.1s, height 0.5s ease 0.1s;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.expertise-card:hover .expertise-description {
  opacity: 1;
  height: auto;
}

.expertise-cta {
  text-align: center;
  padding: 3rem;
  background: rgba(88, 26, 41, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(160, 61, 82, 0.2);
}

.expertise-cta h3 {
  font-size: clamp(1.3rem, 4vw, 2rem);
  margin-bottom: 1rem;
  font-weight: 400;
}

.expertise-cta p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.cta-button {
  background: rgba(88, 26, 41, 0.85);
  color: var(--white);
  padding: 0.8rem 2.5rem;
  border: 1px solid rgba(168, 61, 82, 0.4);
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background: rgba(168, 61, 82, 0.9);
  border-color: rgba(200, 100, 120, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .expertise-card {
    min-height: 350px;
  }
}

@media (max-width: 768px) {
  .expertise {
    padding: 4rem 1.5rem;
  }


  .expertise-intro {
    font-size: 1rem;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .expertise-image {
    height: 200px;
  }

  .expertise-cta {
    padding: 2rem 1.5rem;
  }


  .expertise-cta p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .expertise {
    padding: 3rem 1rem;
  }


  .expertise-intro {
    font-size: 0.9rem;
  }

  .expertise-image {
    height: 180px;
  }

  .expertise-content {
    padding: 1rem;
  }


  .expertise-content p {
    font-size: 0.85rem;
  }

  .expertise-cta {
    padding: 1.5rem 1rem;
  }

  .cta-button {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
}
</style>
