<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const activeDialog = ref<'confidentialite' | 'cgv' | null>(null)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openDialog = (type: 'confidentialite' | 'cgv') => {
  activeDialog.value = type
  document.body.style.overflow = 'hidden'
}

const closeDialog = () => {
  activeDialog.value = null
  document.body.style.overflow = ''
}

const handleOverlayClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('dialog-overlay')) {
    closeDialog()
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo" @click="scrollToTop">
            <img src="/Logo seul_transparent.png" alt="Eclosion" class="logo-img" />
          </div>
          <p class="tagline">Votre événement est né.</p>
        </div>

        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#qui-sommes-nous">Qui sommes-nous</a></li>
            <li><a href="#expertise">Notre Expertise</a></li>
            <li><a href="#pourquoi">Pourquoi nous choisir</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Légal</h4>
          <ul>
            <li><a href="#" @click.prevent="openDialog('confidentialite')">Politique de Confidentialité</a></li>
            <li><a href="#" @click.prevent="openDialog('cgv')">CGV</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Suivez-nous</h4>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/eclosion-evenement" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/eclosionevenement" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Agence Eclosion. Tous droits réservés.</p>
      </div>
    </div>

    <!-- Dialogues Légaux -->
    <Teleport to="body">
      <Transition name="dialog">
        <div v-if="activeDialog" class="dialog-overlay" @click="handleOverlayClick">
          <div class="dialog-container">
            <button class="dialog-close" @click="closeDialog" aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div class="dialog-content">
            <!-- Politique de Confidentialité -->
            <div v-if="activeDialog === 'confidentialite'" class="legal-content">
              <h2>Politique de Confidentialité</h2>
              <div class="legal-section">
                <h3>1. Collecte des données</h3>
                <p>Eclosion Agency collecte des informations lorsque vous utilisez notre site web ou nos services. Les données collectées peuvent inclure :</p>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations relatives à votre événement</li>
                  <li>Données de navigation (cookies)</li>
                </ul>
              </div>
              
              <div class="legal-section">
                <h3>2. Utilisation des données</h3>
                <p>Les données collectées sont utilisées pour :</p>
                <ul>
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Améliorer nos services</li>
                  <li>Vous informer de nos actualités (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
              
              <div class="legal-section">
                <h3>3. Conservation des données</h3>
                <p>Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur.</p>
              </div>
              
              <div class="legal-section">
                <h3>4. Vos droits</h3>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul>
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p>Pour exercer ces droits, contactez-nous à : <strong>[adresse e-mail]</strong></p>
              </div>
              
              <div class="legal-section">
                <h3>5. Cookies</h3>
                <p>Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être accessibles.</p>
              </div>
              
              <div class="legal-section">
                <h3>6. Sécurité</h3>
                <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou destruction.</p>
              </div>
            </div>

            <!-- CGV -->
            <div v-if="activeDialog === 'cgv'" class="legal-content">
              <h2>Conditions Générales de Vente</h2>
              <div class="legal-section">
                <h3>1. Objet</h3>
                <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Eclosion Agency et ses clients concernant la prestation de services d'organisation d'événements.</p>
              </div>
              
              <div class="legal-section">
                <h3>2. Acceptation des conditions</h3>
                <p>Toute commande implique l'acceptation sans réserve des présentes CGV. Toute condition contraire proposée par le client ne pourra être opposée à Eclosion Agency, sauf accord exprès et écrit de notre part.</p>
              </div>
              
              <div class="legal-section">
                <h3>3. Commande et devis</h3>
                <p>Toute prestation fait l'objet d'un devis détaillé établi par Eclosion Agency. Le devis est valable pour une durée de 30 jours. La commande devient ferme et définitive après acceptation du devis par le client et réception d'un acompte de 50% du montant total.</p>
              </div>
              
              <div class="legal-section">
                <h3>4. Prix</h3>
                <p>Les prix sont indiqués en euros, toutes taxes comprises (TTC). Ils sont valables pour la durée indiquée sur le devis. Eclosion Agency se réserve le droit de modifier ses prix à tout moment, étant entendu que les prix figurant sur le devis accepté restent fermes.</p>
              </div>
              
              <div class="legal-section">
                <h3>5. Modalités de paiement</h3>
                <p>Le paiement s'effectue selon les modalités suivantes :</p>
                <ul>
                  <li>Acompte de 50% à la commande</li>
                  <li>Solde à régler 1 jour avant l'événement ou selon les modalités convenues</li>
                </ul>
                <p>En cas de retard de paiement, des pénalités de retard au taux de 10% par mois pourront être appliquées.</p>
              </div>
              
              <div class="legal-section">
                <h3>6. Force majeure</h3>
                <p>Eclosion Agency ne pourra être tenue responsable de tout retard ou défaillance dans l'exécution de ses obligations résultant de circonstances indépendantes de sa volonté, notamment en cas de force majeure, comme décès, catastrophe naturelle, numérique, guerre.</p>
              </div>
              
              <div class="legal-section">
                <h3>7. Droit de rétractation</h3>
                <p>Conformément à la législation en vigueur, le client dispose d'un droit de rétractation de 14 jours à compter de la date de commande, sous réserve que le service n'ait pas été entièrement exécuté.</p>
              </div>
              
              <div class="legal-section">
                <h3>8. Litiges</h3>
                <p>Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation et/ou à leur exécution relève des tribunaux compétents du siège social de SAS Eclosion.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.95) 20%, rgba(15, 15, 15, 0.98) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(160, 61, 82, 0.15);
  padding: 3rem 2rem 1rem;
  position: relative;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  cursor: pointer;
}

.logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  text-align: center;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-section a:hover {
  color: var(--primary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.social-icon:hover {
  background: rgba(200, 100, 120, 0.2);
  border-color: rgba(200, 100, 120, 0.4);
  color: #c86478;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(200, 100, 120, 0.2);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(160, 61, 82, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-section {
    text-align: center;
  }

  .logo {
    justify-content: center;
  }

  .logo-img {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .footer-section h4 {
    font-size: 0.85rem;
  }

  .footer-section a {
    font-size: 0.85rem;
  }

  .footer-bottom {
    font-size: 0.75rem;
  }

  .logo-img {
    height: 45px;
  }
}

/* Dialogues Légaux */
.dialog-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.85);
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

.dialog-container {
  position: relative !important;
  background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%);
  border: 1px solid rgba(160, 61, 82, 0.3);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(160, 61, 82, 0.1);
  animation: dialogSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000000 !important;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
}

.dialog-container::-webkit-scrollbar {
  width: 8px;
}

.dialog-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.dialog-container::-webkit-scrollbar-thumb {
  background: rgba(160, 61, 82, 0.5);
  border-radius: 4px;
}

.dialog-container::-webkit-scrollbar-thumb:hover {
  background: rgba(160, 61, 82, 0.7);
}

.dialog-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000001 !important;
}

.dialog-close:hover {
  background: rgba(160, 61, 82, 0.2);
  border-color: rgba(160, 61, 82, 0.4);
  color: #c86478;
  transform: rotate(90deg);
}

.dialog-close svg {
  width: 20px;
  height: 20px;
}

.dialog-content {
  padding: 3rem 2.5rem;
}

.legal-content h2 {
  font-size: clamp(1.3rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--white);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(160, 61, 82, 0.3);
  letter-spacing: 1px;
}

.legal-content h3 {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 400;
  color: var(--accent);
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.legal-section {
  margin-bottom: 2rem;
}

.legal-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.legal-section p strong {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}

.legal-section ul {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.legal-section ul li {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.legal-section ul li::before {
  content: "•";
  color: var(--accent);
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: 0;
}

/* Animations */
@keyframes dialogSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-enter-active .dialog-container,
.dialog-leave-active .dialog-container {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.dialog-enter-from {
  opacity: 0;
}

.dialog-enter-from .dialog-container {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-leave-to .dialog-container {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Responsive pour les dialogues */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 1rem;
  }

  .dialog-container {
    max-height: 95vh;
    border-radius: 12px;
  }

  .dialog-content {
    padding: 2rem 1.5rem;
  }

  .dialog-close {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
  }


  .legal-section {
    margin-bottom: 1.5rem;
  }

  .legal-section p,
  .legal-section ul li {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .dialog-content {
    padding: 1.5rem 1rem;
  }

}
</style>
