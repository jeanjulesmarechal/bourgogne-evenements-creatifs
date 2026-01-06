<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  nom: '',
  prenom: '',
  societe: '',
  email: '',
  telephone: '',
  nombrePersonnes: '',
  typeProjet: '',
  details: ''
})

const typesProjets = [
  'Séminaire d\'entreprise',
  'Conférence',
  'Congrès',
  'Convention',
  'Team Building',
  'Incentive',
  'Formation',
  'Dîner de Gala',
  'Soirée privée',
  'Cocktail',
  'Réception',
  'Lancement de produit',
  'Inauguration',
  'Salon professionnel',
  'Exposition',
  'Festival',
  'Concert',
  'Événement sportif',
  'Cérémonie de remise de prix',
  'Autres'
]

const submitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')
const errors = ref({
  email: '',
  telephone: ''
})

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  if (!phone || phone.trim() === '') return false
  
  // Nettoyer le numéro (supprimer espaces, tirets, points, parenthèses)
  const cleanPhone = phone.replace(/[\s.\-()]/g, '')
  
  // Format français: 0X XX XX XX XX ou +33 X XX XX XX XX
  const frenchFormat = /^(0|\+33)[1-9]\d{8}$/
  
  // Format international général (8-15 chiffres après le +)
  const internationalFormat = /^\+\d{8,15}$/
  
  // Format local avec 10 chiffres
  const localFormat = /^0[1-9]\d{8}$/
  
  return frenchFormat.test(cleanPhone) || internationalFormat.test(cleanPhone) || localFormat.test(cleanPhone)
}

const handleEmailBlur = () => {
  if (formData.value.email) {
    errors.value.email = validateEmail(formData.value.email) ? '' : 'Veuillez entrer une adresse email valide'
  }
}

const handlePhoneBlur = () => {
  if (formData.value.telephone) {
    errors.value.telephone = validatePhone(formData.value.telephone) ? '' : 'Veuillez entrer un numéro de téléphone valide (ex: +33 6 12 34 56 78 ou 06 12 34 56 78)'
  }
}

const openEmail = () => {
  window.location.href = 'mailto:contact@eclosion-evenements.fr'
}

const openPhone = () => {
  window.location.href = 'tel:+33668599846'
}

const handleSubmit = async () => {
  // Réinitialiser les erreurs
  errors.value = { email: '', telephone: '' }

  // Validation des champs obligatoires
  if (!formData.value.nom || !formData.value.prenom || !formData.value.email) {
    alert('Veuillez remplir les champs obligatoires')
    return
  }

  // Validation de l'email
  if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Veuillez entrer une adresse email valide'
    alert('Veuillez entrer une adresse email valide')
    return
  }

  // Validation du téléphone
  if (!formData.value.telephone || !validatePhone(formData.value.telephone)) {
    errors.value.telephone = 'Veuillez entrer un numéro de téléphone valide (ex: +33 6 12 34 56 78 ou 06 12 34 56 78)'
    alert('Veuillez entrer un numéro de téléphone valide (ex: +33 6 12 34 56 78 ou 06 12 34 56 78)')
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const serviceId =  'service_52g9ilq'
    const templateIdReception = 'template_hqojud6'
    const templateIdAutoReply = 'template_qljuqrc'
    const publicKey = 'z2PKpqba9zIA_vV5-'

    if (!publicKey) {
      submitError.value = 'Configuration EmailJS incomplète. Vérifiez VITE_EMAILJS_PUBLIC_KEY dans le fichier .env'
      isSubmitting.value = false
      console.error('Configuration manquante:', { publicKey: !!publicKey })
      return
    }

    const messageContent = `Nouvelle demande de devis

Nom: ${formData.value.nom}
Prénom: ${formData.value.prenom}
Société: ${formData.value.societe || 'Non renseigné'}
Email: ${formData.value.email}
Téléphone: ${formData.value.telephone}
Nombre de personnes: ${formData.value.nombrePersonnes || 'Non renseigné'}
Type de projet: ${formData.value.typeProjet}

Détails:
${formData.value.details || 'Aucun détail supplémentaire'}`

    const templateParamsReception = {
      to_email: 'contact@eclosion-evenements.fr',
      from_name: `${formData.value.prenom} ${formData.value.nom}`,
      from_email: formData.value.email,
      subject: `Demande de devis - ${formData.value.prenom} ${formData.value.nom}`,
      nom: formData.value.nom || '',
      prenom: formData.value.prenom || '',
      societe: formData.value.societe || 'Non renseigné',
      email: formData.value.email || '',
      telephone: formData.value.telephone || '',
      nombre_personnes: formData.value.nombrePersonnes || 'Non renseigné',
      type_projet: formData.value.typeProjet || '',
      details: formData.value.details || 'Aucun détail supplémentaire',
      message: messageContent
    }

    
    const result = await emailjs.send(serviceId, templateIdReception, templateParamsReception, publicKey)
    
    
    if (result.status !== 200) {
      throw new Error(`Erreur EmailJS: ${result.text || 'Status ' + result.status}`)
    }

    if (formData.value.email ) {
      const autoReplyParams = {
        to_email: formData.value.email,
        email: formData.value.email,
        to_name: `${formData.value.prenom} ${formData.value.nom}`,
        from_name: 'Éclosion Événements',
        from_email: 'contact@eclosion-evenements.fr',
        subject: 'Confirmation de réception - Votre demande de devis',
        nom: formData.value.nom || '',
        prenom: formData.value.prenom || ''
      }



      try {
        await emailjs.send(serviceId, templateIdAutoReply, autoReplyParams, publicKey)
      } catch (autoReplyError: any) {
        console.warn('Erreur réponse automatique (non bloquante):', autoReplyError)
      }
    }

    submitted.value = true
    isSubmitting.value = false
    submitError.value = ''
    setTimeout(() => {
      submitted.value = false
      formData.value = {
        nom: '',
        prenom: '',
        societe: '',
        email: '',
        telephone: '',
        nombrePersonnes: '',
        typeProjet: '',
        details: ''
      }
    }, 5000)
  } catch (error: any) {
    console.error('Erreur complète:', error)
    console.error('Erreur status:', error?.status)
    console.error('Erreur text:', error?.text)
    console.error('Erreur message:', error?.message)
    submitError.value = error?.text || error?.message || 'Erreur lors de l\'envoi. Vérifiez la console pour plus de détails.'
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-container">
      <div class="contact-info">
        <span class="section-tag">Contactez-nous</span>
        <h2>Parlons de votre<br><span class="highlight">prochain événement</span></h2>

        <p class="contact-intro">
          Chaque projet est une nouvelle éclosion. Remplissez ce formulaire pour que nous
          puissions imaginer ensemble des moments d'exception.
        </p>

        <div class="contact-details">
          <div class="detail-item">
            <div class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h4>Horaires</h4>
              <p>Lun - Ven : 9h00 - 18h00<br />Sam : Sur rendez-vous<br />Dim : Fermé</p>
            </div>
          </div>

          <div class="detail-item clickable" @click="openEmail">
            <div class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>
                <span class="contact-link">
                  contact@eclosion-evenements.fr
                </span>
              </p>
            </div>
          </div>

          <div class="detail-item clickable" @click="openPhone">
            <div class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h4>Téléphone</h4>
              <p>
                <span class="contact-link">
                  +33 6 68 59 98 46
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <h3>Formulaire de contact</h3>

        <div class="form-row">
          <div class="form-group">
            <label for="nom">Nom *</label>
            <input
              id="nom"
              v-model="formData.nom"
              type="text"
              placeholder="Votre nom"
              required
            />
          </div>
          <div class="form-group">
            <label for="prenom">Prénom *</label>
            <input
              id="prenom"
              v-model="formData.prenom"
              type="text"
              placeholder="Votre prénom"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="societe">Société</label>
            <input
              id="societe"
              v-model="formData.societe"
              type="text"
              placeholder="Votre entreprise"
            />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="exemple@email.com"
              required
              :class="{ 'error': errors.email }"
              @blur="handleEmailBlur"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="telephone">Téléphone *</label>
            <input
              id="telephone"
              v-model="formData.telephone"
              type="tel"
              placeholder="+33 6 00 00 00 00"
              required
              :class="{ 'error': errors.telephone }"
              @blur="handlePhoneBlur"
            />
            <span v-if="errors.telephone" class="error-message">{{ errors.telephone }}</span>
          </div>
          <div class="form-group">
            <label for="nombrePersonnes">Nombre de personnes</label>
            <input
              id="nombrePersonnes"
              v-model="formData.nombrePersonnes"
              type="text"
              placeholder="Ex: 50"
            />
          </div>
        </div>

        <div class="form-group full-width">
          <label for="typeProjet">Type de projet *</label>
          <select
            id="typeProjet"
            v-model="formData.typeProjet"
            required
          >
            <option value="">Sélectionnez un type d'événement</option>
            <option v-for="type in typesProjets" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>

        <div class="form-group full-width">
          <label for="details">Détails du projet</label>
          <textarea
            id="details"
            v-model="formData.details"
            placeholder="Parlez-nous de vos envies, de l'ambiance souhaitée..."
            rows="6"
          ></textarea>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Envoi en cours...' : 'Valider ma demande' }}
          <span class="arrow">→</span>
        </button>

        <transition name="fade">
          <div v-if="submitted" class="success-message">
            ✓ Merci ! Votre demande a été envoyée. Nous vous recontacterons rapidement.
          </div>
        </transition>

        <transition name="fade">
          <div v-if="submitError" class="error-message-submit">
            ⚠ {{ submitError }}
          </div>
        </transition>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-tag {
  display: inline-block;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: fit-content;
}

.contact-info h2 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 400;
  letter-spacing: -1px;
  margin: 0;
}

.highlight {
  color: var(--accent);
  font-style: italic;
}

.contact-intro {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.detail-item.clickable {
  cursor: pointer;
}

.detail-item.clickable:hover {
  transform: translateY(-2px);
}

.detail-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(200, 100, 120, 0.1) 0%, rgba(160, 61, 82, 0.1) 100%);
  border: 1px solid rgba(200, 100, 120, 0.2);
  border-radius: 12px;
  color: var(--accent);
  transition: all 0.3s ease;
}

.detail-icon svg {
  width: 24px;
  height: 24px;
  stroke-width: 1.5;
}

.detail-item:hover .detail-icon {
  background: linear-gradient(135deg, rgba(200, 100, 120, 0.2) 0%, rgba(160, 61, 82, 0.2) 100%);
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 100, 120, 0.2);
}

.detail-item h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.detail-item p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.contact-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.detail-item.clickable .contact-link {
  pointer-events: none;
}

.detail-item.clickable:hover .contact-link {
  color: #c86478;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-form h3 {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(200, 100, 120, 0.2);
  border-radius: 6px;
  padding: 0.8rem;
  color: var(--white);
  font-family: 'Prata', serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(88, 26, 41, 0.1);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c86478' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  background-color: rgba(20, 20, 20, 0.9) !important;
  cursor: pointer;
}

.form-group select option {
  background-color: rgba(20, 20, 20, 0.95) !important;
  color: var(--white) !important;
  padding: 0.5rem;
}

.form-group select:focus option {
  background-color: rgba(30, 30, 30, 0.95) !important;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
}

.form-group input.error:focus,
.form-group select.error:focus,
.form-group textarea.error:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
}

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.4rem;
  padding-left: 0.2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--primary);
  color: var(--white);
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  width: fit-content;
}

.submit-button:hover:not(:disabled) {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(88, 26, 41, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.arrow {
  transition: transform 0.3s ease;
}

.submit-button:hover .arrow {
  transform: translateX(5px);
}

.success-message {
  padding: 1rem;
  background: rgba(168, 61, 82, 0.2);
  border: 1px solid var(--accent);
  border-radius: 6px;
  text-align: center;
  color: var(--accent);
  font-weight: 600;
}

.error-message-submit {
  padding: 1rem;
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid #e74c3c;
  border-radius: 6px;
  text-align: center;
  color: #e74c3c;
  font-weight: 600;
  margin-top: 1rem;
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .contact-container {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1.5rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }


  .contact-intro {
    font-size: 1rem;
  }

  .detail-item {
    padding: 0.4rem 0;
  }

  .detail-icon {
    width: 44px;
    height: 44px;
  }

  .detail-icon svg {
    width: 22px;
    height: 22px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .submit-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 3rem 1rem;
  }


  .contact-intro {
    font-size: 0.9rem;
  }

  .contact-details {
    gap: 1rem;
  }

  .detail-item {
    flex-direction: column;
    text-align: center;
    padding: 0.5rem 0;
  }

  .detail-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

  .detail-icon svg {
    width: 20px;
    height: 20px;
  }


  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
}
</style>
