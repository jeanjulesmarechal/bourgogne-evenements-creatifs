# 🌟 ECLOSION - Agence Événementielle Premium

**Votre évènement est né** - L'événement professionnel, repensé avec méthode.

## 📋 À propos du projet

ECLOSION est une agence événementielle premium spécialisée dans l'organisation de séminaires, team-buildings et conventions d'entreprise. Notre approche méthodique et élégante accompagne PME, directions et institutions dans la création d'événements efficaces et maîtrisés.

## 🚀 Technologies utilisées

Ce projet est construit avec les technologies modernes suivantes :

- **Frontend** : React 18 + TypeScript
- **Build Tool** : Vite 5
- **Styling** : Tailwind CSS + shadcn/ui
- **Routing** : React Router DOM
- **State Management** : TanStack Query
- **Forms** : React Hook Form + Zod
- **UI Components** : Radix UI primitives
- **Icons** : Lucide React
- **Fonts** : Montserrat (Google Fonts)

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ et npm/yarn
- Git

### Installation

```bash
# 1. Cloner le repository
git clone <URL_DU_REPO>
cd bourgogne-evenements-creatifs-main

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible à l'adresse : http://localhost:8080

### Scripts disponibles

```bash
npm run dev          # Lance le serveur de développement
npm run build        # Build de production
npm run build:dev    # Build de développement
npm run preview      # Prévisualise le build de production
npm run lint         # Vérifie le code avec ESLint
```

## 🏗️ Architecture du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── ui/             # Composants UI shadcn/ui
│   ├── Header.tsx      # En-tête du site
│   ├── HeroSection.tsx # Section d'accueil
│   ├── ExpertiseSection.tsx # Section expertise
│   └── ...            # Autres sections
├── pages/              # Pages de l'application
│   ├── Index.tsx       # Page d'accueil
│   └── NotFound.tsx    # Page 404
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et configurations
└── main.tsx           # Point d'entrée de l'application
```

## 🎨 Design System

Le projet utilise un système de design cohérent basé sur :

- **Palette de couleurs** : Variables CSS personnalisées via Tailwind
- **Typographie** : Police Montserrat avec hiérarchie claire
- **Composants** : Bibliothèque shadcn/ui pour une UI moderne et accessible
- **Responsive** : Design mobile-first avec breakpoints Tailwind

## 📱 Sections du site

1. **Header** - Navigation principale
2. **Hero** - Section d'accueil avec message principal
3. **Expertise** - Domaines de compétence
4. **Pourquoi nous choisir** - Avantages concurrentiels
5. **Témoignages** - Retours clients
6. **Partenaires** - Réseau de collaborateurs
7. **Contact** - Formulaire de contact
8. **Footer** - Informations légales et liens

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Déploiement sur serveur web

1. Uploader le contenu du dossier `dist/` sur votre serveur web
2. Configurer le serveur pour servir `index.html` sur toutes les routes (SPA)
3. Configurer les redirections HTTPS si nécessaire

### Variables d'environnement

Créez un fichier `.env.local` pour les variables d'environnement :

```env
VITE_API_URL=https://api.eclosion-events.fr
VITE_CONTACT_EMAIL=contact@eclosion-events.fr
```

## 🔧 Configuration

### Tailwind CSS

Le projet utilise Tailwind CSS avec une configuration personnalisée dans `tailwind.config.ts` incluant :

- Animations personnalisées
- Variables de couleurs ECLOSION
- Typographie avec plugin `@tailwindcss/typography`

### ESLint

Configuration ESLint moderne avec règles pour React et TypeScript dans `eslint.config.js`.

## 📝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est privé et propriétaire d'ECLOSION.

## 📞 Contact

- **Site web** : [eclosion-events.fr](https://eclosion-events.fr)
- **Email** : contact@eclosion-events.fr
- **Localisation** : Bourgogne, France

---

*Développé avec ❤️ pour ECLOSION*
