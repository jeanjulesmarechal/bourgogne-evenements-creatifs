<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Moments from './components/Moments.vue'
import Team from './components/Team.vue'
import Expertise from './components/Expertise.vue'
import WhyChoose from './components/WhyChoose.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'


onMounted(() => {
  // Configuration de l'Intersection Observer pour les animations au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        // Arrêter d'observer après l'animation pour améliorer les performances
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observer tous les éléments avec les classes d'animation
  const animatedElements = document.querySelectorAll(
    '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
  )
  
  animatedElements.forEach(el => observer.observe(el))
})
</script>

<template>
  <div id="app">
    <Header />
    <Hero />
    <WhyChoose />
    <Expertise />
    <Team />
    <Moments />
    <Contact />
    <Footer />
    <CookieBanner />
  </div>
</template>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
}
</style>
