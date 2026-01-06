<script setup lang="ts">
import { onMounted } from 'vue'

// Données structurées Schema.org pour améliorer le référencement
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ECLOSION",
  "alternateName": "ECLOSION Événements",
  "url": "https://eclosion-evenements.fr",
  "logo": "https://eclosion-evenements.fr/logo_round.png",
  "description": "Agence événementielle premium spécialisée dans l'organisation de séminaires, team-buildings et conventions d'entreprise en Bourgogne.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Bourgogne",
    "addressCountry": "FR"
  },
  "sameAs": [
    // Ajoutez vos réseaux sociaux ici si vous en avez
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Service client",
    "areaServed": "FR",
    "availableLanguage": "French"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "serviceType": [
    "Organisation de séminaires d'entreprise",
    "Team-building",
    "Conventions professionnelles",
    "Événements sur-mesure"
  ]
}

onMounted(() => {
  // Ajouter les données structurées au head
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
})
</script>

<template>
  <!-- Ce composant ajoute les données structurées via JavaScript -->
</template>
