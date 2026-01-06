<script setup lang="ts">
const team = [
  {
    id: 1,
    name: 'Nathanaël Michelet',
    role: 'Co-fondateur',
    image: '/nat.jpg'
  },
  {
    id: 2,
    name: 'Jean-Jules Maréchal',
    role: 'Co-fondateur',
    image: '/jj.jpg'
  }
]

const stats = [
  { number: '10+', label: 'Années d\'expérience' },
  { number: '250+', label: 'Événements réussis' }
]
</script>

<template>
  <section id="qui-sommes-nous" class="team">
    <div class="team-container">
      <div class="team-header scroll-reveal">
        <span class="section-tag">Qui sommes-nous</span>
        <h2>Notre équipe dévouée</h2>
      </div>

      <div class="team-content">
        <div class="team-text scroll-reveal-left">
          <p>
            ECLOSION est une agence événementielle haut de gamme implantée en Bourgogne, fondée par
            Nathanaël Michelet et Jean-Jules Maréchal, proposant des prestations clés en main
            alliant originalité, performance et accompagnement sur mesure.
          </p>
          <p>
            De la conception créative à la réalisation logistique, notre équipe dévouée vous
            accompagne pour créer des moments d'exception qui reflètent vos valeurs.
          </p>

          <div class="stats">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="team-members">
          <div v-for="member in team" :key="member.id" class="member-card scroll-reveal-right">
            <img :src="member.image" :alt="member.name" class="member-image" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding: 8rem 2rem 6rem;
  background: rgba(88, 26, 41, 0.05);
  scroll-margin-top: 120px;
}

.team-container {
  max-width: 1400px;
  margin: 0 auto;
}

.team-header {
  margin-bottom: 3rem;
  text-align: center;
}

.section-tag {
  display: inline-block;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.team-header h2 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 400;
  letter-spacing: -1px;
  text-align: center;
}

.team-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.team-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.team-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 400;
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.member-card {
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.member-card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(135deg, rgba(200, 100, 120, 0.2), rgba(88, 26, 41, 0.2));
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.member-card:hover {
  transform: translateY(-8px);
}

.member-card:hover::before {
  opacity: 1;
}

.member-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center top;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 2px solid rgba(200, 100, 120, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.member-card:hover .member-image {
  border-color: rgba(200, 100, 120, 0.6);
  box-shadow: 
    0 8px 25px rgba(200, 100, 120, 0.3),
    0 0 20px rgba(200, 100, 120, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}

.member-card:first-child .member-image {
  object-position: center 10%;
}

.member-card:nth-child(2) .member-image {
  object-position: center center;
}

.member-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: 400;
}

.member-card p {
  font-size: 0.9rem;
  color: var(--accent);
  letter-spacing: 0.5px;
}

@media (max-width: 1024px) {
  .team-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .team {
    padding: 4rem 1.5rem;
  }


  .team-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-text p {
    font-size: 1rem;
  }

  .stats {
    gap: 1.5rem;
  }


  .team-members {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .team {
    padding: 3rem 1rem;
  }


  .team-text p {
    font-size: 0.95rem;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .team-members {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .member-image {
    max-width: 200px;
    margin: 0 auto 1rem;
  }
}
</style>
