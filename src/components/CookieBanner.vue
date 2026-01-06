<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const isVisible = ref(false)

onMounted(() => {
  // Vérifier si le consentement a déjà été donné
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden'
    // Délai pour une apparition plus élégante
    setTimeout(() => {
      showBanner.value = true
      setTimeout(() => {
        isVisible.value = true
      }, 50)
    }, 500)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  hideBanner()
}

const rejectCookies = () => {
  localStorage.setItem('cookieConsent', 'rejected')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  hideBanner()
}

const hideBanner = () => {
  isVisible.value = false
  setTimeout(() => {
    showBanner.value = false
    // Réactiver le scroll du body
    document.body.style.overflow = ''
  }, 400)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="cookie-overlay">
      <div v-if="showBanner" class="cookie-overlay" :class="{ 'visible': isVisible }">
        <div class="cookie-banner" :class="{ 'visible': isVisible }">
          <div class="cookie-content">
            <div class="cookie-icon">
              <img src="/Logo seul_transparent.png" alt="Eclosion" class="cookie-logo" />
            </div>
            
            <div class="cookie-text">
              <h3>Nous respectons votre confidentialité</h3>
              <p>
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic. 
                En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.
              </p>
            </div>
            
            <div class="cookie-actions">
              <button class="cookie-btn cookie-btn-secondary" @click="rejectCookies">
                Refuser
              </button>
              <button class="cookie-btn cookie-btn-primary" @click="acceptCookies">
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cookie-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: all;
  overflow-y: auto;
}

.cookie-overlay.visible {
  opacity: 1;
}

.cookie-banner {
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(25, 15, 20, 0.98) 0%, rgba(35, 20, 25, 0.98) 100%);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  border-top: 1px solid rgba(200, 100, 120, 0.3);
  box-shadow: 
    0 -4px 30px rgba(0, 0, 0, 0.5),
    0 -1px 0 rgba(200, 100, 120, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: auto;
}

.cookie-banner.visible {
  transform: translateY(0);
}

.cookie-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(200, 100, 120, 0.4) 50%, 
    transparent 100%);
}

.cookie-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cookie-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(200, 100, 120, 0.15) 0%, rgba(160, 61, 82, 0.15) 100%);
  border: 1px solid rgba(200, 100, 120, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cookie-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(200, 100, 120, 0.3));
}

.cookie-text {
  flex: 1;
  min-width: 300px;
}

.cookie-text h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;
}

.cookie-text p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cookie-btn {
  padding: 0.75rem 1.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Prata', serif;
  white-space: nowrap;
}

.cookie-btn-primary {
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(88, 26, 41, 0.3);
}

.cookie-btn-primary:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(88, 26, 41, 0.4);
}

.cookie-btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(88, 26, 41, 0.3);
}

.cookie-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(8px);
}

.cookie-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  color: var(--white);
  transform: translateY(-2px);
}

.cookie-btn-secondary:active {
  transform: translateY(0);
}

/* Animations */
.cookie-overlay-enter-active {
  transition: opacity 0.4s ease;
}

.cookie-overlay-leave-active {
  transition: opacity 0.3s ease;
}

.cookie-overlay-enter-from,
.cookie-overlay-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .cookie-content {
    gap: 1.25rem;
  }
  
  .cookie-text {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .cookie-overlay {
    align-items: center;
    padding: 1rem;
  }
  
  .cookie-banner {
    padding: 1.5rem 1.5rem;
    border-radius: 16px 16px 0 0;
    max-width: 100%;
  }
  
  .cookie-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .cookie-icon {
    width: 44px;
    height: 44px;
  }
  
  .cookie-logo {
    width: 28px;
    height: 28px;
  }
  
  .cookie-text {
    min-width: 100%;
  }
  
  .cookie-text h3 {
    font-size: 1rem;
  }
  
  .cookie-text p {
    font-size: 0.85rem;
  }
  
  .cookie-actions {
    width: 100%;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cookie-btn {
    width: 100%;
    padding: 0.85rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .cookie-banner {
    padding: 1rem 1.25rem;
  }
  
  .cookie-icon {
    width: 40px;
    height: 40px;
  }
  
  .cookie-logo {
    width: 24px;
    height: 24px;
  }
  
  .cookie-text h3 {
    font-size: 0.95rem;
  }
  
  .cookie-text p {
    font-size: 0.8rem;
  }
  
  .cookie-btn {
    font-size: 0.85rem;
    padding: 0.8rem 1.25rem;
  }
}
</style>

