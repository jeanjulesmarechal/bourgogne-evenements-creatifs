<script setup lang="ts">
import { ref } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  const header = document.querySelector('.header') as HTMLElement
  if (element && header) {
    const headerHeight = header.offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight - 20 // 20px d'espace supplémentaire

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    mobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  mobileMenuOpen.value = false
}

window.addEventListener('scroll', () => {
  scrolled.value = window.scrollY > 50
})
</script>

<template>
  <header :class="['header', { scrolled }]">
    <div class="header-content">
      <div class="logo" @click="scrollToTop">
        <img src="/logo_300x300_scaled_transparent.png" alt="Eclosion" class="logo-img logo-desktop" />
        <img src="/Logo seul_transparent.png" alt="Eclosion" class="logo-img logo-mobile" />
      </div>

      <nav class="nav-menu" :class="{ 'mobile-open': mobileMenuOpen }">
        <button class="nav-link" @click="scrollToSection('accueil')">Accueil</button>
        <button class="nav-link" @click="scrollToSection('qui-sommes-nous')">Qui sommes-nous</button>
        <button class="nav-link" @click="scrollToSection('expertise')">Notre Expertise</button>
        <button class="nav-link" @click="scrollToSection('pourquoi')">Pourquoi nous choisir</button>
        <button class="nav-link" @click="scrollToSection('contact')">Contact</button>
      </nav>

      <button class="cta-button" @click="scrollToSection('contact')">Obtenir un devis</button>
      
      <button class="mobile-menu-toggle" :class="{ 'active': mobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="toggleMobileMenu"></div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(30, 20, 25, 0.7) 0%, rgba(40, 25, 30, 0.7) 100%);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  border-bottom: 1px solid rgba(200, 100, 120, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(200, 100, 120, 0.3) 50%, 
    transparent 100%);
  opacity: 0.5;
}

.header.scrolled {
  background: linear-gradient(135deg, rgba(25, 15, 20, 0.9) 0%, rgba(35, 20, 25, 0.9) 100%);
  border-bottom: 1px solid rgba(200, 100, 120, 0.25);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.2), 
    0 0 0 1px rgba(200, 100, 120, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.header.scrolled::before {
  opacity: 0.8;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.mobile-menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-toggle:hover span {
  background: #c86478;
}

.logo {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-img {
  height: auto;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(200, 100, 120, 0.3));
  transition: filter 0.3s ease;
}

.logo-desktop {
  display: block;
}

.logo-mobile {
  display: none;
}

.logo:hover .logo-img {
  filter: drop-shadow(0 4px 12px rgba(200, 100, 120, 0.5));
}

.nav-menu {
  display: flex;
  gap: 3rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-weight: 500;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #c86478 0%, #d47588 100%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(200, 100, 120, 0.4);
}

.nav-link:hover::after {
  width: 100%;
}

.cta-button {
  background: rgba(88, 26, 41, 0.85);
  color: var(--white);
  padding: 0.8rem 2rem;
  border: 1px solid rgba(168, 61, 82, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background: rgba(168, 61, 82, 0.9);
  border-color: rgba(200, 100, 120, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .header-content {
    gap: 1.5rem;
  }
  
  .nav-menu {
    gap: 2rem;
  }
  
  .cta-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.85rem;
    margin-left: auto;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem 1.5rem;
    gap: 1rem;
  }

  .logo-desktop {
    display: none;
  }

  .logo-mobile {
    display: block;
    max-height: 50px;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: linear-gradient(135deg, rgba(25, 15, 20, 0.98) 0%, rgba(35, 20, 25, 0.98) 100%);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .nav-menu.mobile-open {
    right: 0;
  }

  .nav-link {
    width: 100%;
    text-align: left;
    padding: 0.8rem 0;
    font-size: 1.1rem;
  }

  .nav-link::after {
    bottom: 0.5rem;
  }

  .cta-button {
    display: none;
  }

  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    backdrop-filter: blur(2px);
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0.8rem 1rem;
  }

  .logo-mobile {
    max-height: 40px;
  }

  .nav-menu {
    width: 85%;
    padding: 4rem 1.5rem 2rem;
  }
}
</style>
