# 🔍 Guide d'amélioration du référencement Google

## ✅ Optimisations déjà mises en place

### 1. **Balises Meta SEO** (`index.html`)
- ✅ Titre optimisé avec mots-clés
- ✅ Description meta complète et pertinente
- ✅ Mots-clés stratégiques
- ✅ Balise canonical (domaine principal)
- ✅ Langue française (`lang="fr"`)
- ✅ Open Graph pour les réseaux sociaux
- ✅ Twitter Cards

### 2. **Données structurées Schema.org** (`src/components/SeoHead.vue`)
- ✅ Organisation Schema.org
- ✅ Informations de contact
- ✅ Services proposés
- ✅ Zone géographique (Bourgogne, France)

### 3. **Sitemap.xml** (`public/sitemap.xml`)
- ✅ Sitemap créé avec toutes les pages importantes
- ✅ Référencé dans `robots.txt`

### 4. **Robots.txt** (`public/robots.txt`)
- ✅ Autorise l'indexation
- ✅ Référence le sitemap

---

## 🚀 Actions à faire pour améliorer le référencement

### 1. **Soumission à Google Search Console** (PRIORITAIRE)

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez la propriété `https://eclosion-evenements.fr`
3. Vérifiez la propriété (via fichier HTML ou DNS)
4. Soumettez le sitemap : `https://eclosion-evenements.fr/sitemap.xml`

**Pourquoi c'est important :**
- Google indexera votre site plus rapidement
- Vous verrez comment Google voit votre site
- Vous recevrez des alertes en cas de problème

### 2. **Créer un compte Google My Business**

1. Allez sur [Google My Business](https://www.google.com/business/)
2. Créez un profil pour ECLOSION
3. Ajoutez :
   - Adresse complète (si vous avez un bureau)
   - Numéro de téléphone
   - Horaires d'ouverture
   - Photos
   - Description de l'entreprise
   - Catégories : "Agence événementielle", "Organisateur d'événements"

**Impact :** Apparaîtra dans les résultats de recherche locaux et Google Maps

### 3. **Optimiser le contenu du site**

#### Ajouter plus de contenu textuel :
- Descriptions détaillées de vos services
- Articles de blog sur l'événementiel
- Témoignages clients
- Cas d'études

#### Mots-clés à cibler :
- "agence événementielle Bourgogne"
- "séminaire entreprise Bourgogne"
- "team building professionnel"
- "organisation événement entreprise"
- "convention entreprise"

### 4. **Créer des backlinks (liens externes)**

- Participer à des annuaires d'entreprises locaux
- Partenariats avec d'autres entreprises
- Articles invités sur des blogs événementiels
- Inscription dans les chambres de commerce locales

### 5. **Optimiser les images**

- Ajouter des attributs `alt` descriptifs à toutes les images
- Utiliser des noms de fichiers descriptifs (ex: `seminaire-entreprise-bourgogne.jpg`)
- Compresser les images pour améliorer la vitesse de chargement

### 6. **Vitesse de chargement**

- Vérifier avec [PageSpeed Insights](https://pagespeed.web.dev/)
- Optimiser les images
- Minimiser le CSS/JS
- Utiliser le CDN Vercel (déjà en place)

### 7. **Créer des pages dédiées**

Créer des pages spécifiques pour :
- `/seminaires-entreprise`
- `/team-building`
- `/conventions`
- `/contact`

Cela permettra de mieux cibler les recherches spécifiques.

---

## 📊 Vérification du référencement

### Outils à utiliser :

1. **Google Search Console** - Suivi de l'indexation
2. **Google Analytics** - Statistiques de trafic
3. **SEMrush / Ahrefs** - Analyse des mots-clés et backlinks
4. **PageSpeed Insights** - Performance du site

### Vérifications régulières :

- ✅ Le site apparaît-il dans Google pour "ECLOSION" ?
- ✅ Le site apparaît-il pour "agence événementielle Bourgogne" ?
- ✅ Les données structurées sont-elles valides ? (tester avec [Rich Results Test](https://search.google.com/test/rich-results))
- ✅ Le sitemap est-il bien indexé dans Search Console ?

---

## ⚠️ Problème actuel : "eclosion-events.fr" au lieu de "eclosion-evenements.fr"

### Causes possibles :

1. **Ancien domaine encore indexé** : Google a peut-être encore l'ancien domaine en cache
2. **Redirections manquantes** : Si l'ancien domaine existe encore, il faut le rediriger vers le nouveau
3. **Liens externes** : Des sites externes pointent peut-être encore vers l'ancien domaine

### Solutions :

1. **Vérifier si l'ancien domaine existe encore**
   - Si oui : Mettre en place une redirection 301 permanente vers `eclosion-evenements.fr`
   - Si non : Attendre que Google mette à jour son index

2. **Soumettre les deux domaines à Search Console**
   - Ajouter `eclosion-events.fr` (si il existe)
   - Déclarer le changement d'adresse vers `eclosion-evenements.fr`

3. **Demander la suppression de l'ancien domaine** (si il n'existe plus)
   - Dans Search Console : Outils > Suppression d'URL

4. **Patience** : Google peut prendre plusieurs semaines/mois pour mettre à jour son index

---

## 📝 Checklist de déploiement

- [x] Balises meta SEO ajoutées
- [x] Données structurées Schema.org
- [x] Sitemap.xml créé
- [x] Robots.txt optimisé
- [ ] Soumission à Google Search Console
- [ ] Création Google My Business
- [ ] Vérification des redirections (si ancien domaine existe)
- [ ] Ajout de contenu textuel enrichi
- [ ] Optimisation des images (alt tags)
- [ ] Test de vitesse (PageSpeed Insights)

---

## 🎯 Objectifs à court terme (1-3 mois)

1. Apparaître en première page pour "ECLOSION"
2. Apparaître dans les résultats pour "agence événementielle Bourgogne"
3. Avoir au moins 10 pages indexées par Google
4. Recevoir du trafic organique depuis Google

---

*Dernière mise à jour : 6 janvier 2026*
