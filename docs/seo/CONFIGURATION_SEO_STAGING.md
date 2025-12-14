# 🔒 Configuration SEO - Protection Staging

## 📋 Objectif
Empêcher **complètement** l'indexation du site de test `test.eclosion-evenements.fr` par tous les moteurs de recherche, tout en permettant l'accès à toute personne ayant le lien.

---

## 🛡️ Protections mises en place

### 1. **Robots.txt - Blocage serveur**
Le fichier `public/robots.txt` bloque TOUS les robots de moteurs de recherche :
- Google (Googlebot, Googlebot-Image, Googlebot-News)
- Bing (Bingbot, BingPreview)
- Réseaux sociaux (Twitterbot, facebookexternalhit, LinkedInBot)
- Autres (Yahoo, DuckDuckGo, Baidu, Yandex)

**⚠️ Important pour la production :**
- Sur la branche `main` (production), remplacer `public/robots.txt` par `public/robots-production.txt`
- Ou créer un script de build qui copie le bon fichier selon l'environnement

### 2. **Meta tags dynamiques - Blocage navigateur**
Le composant `SeoMetaTags.tsx` ajoute dynamiquement :
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`
- `<meta name="googlebot" content="noindex, nofollow">`
- `<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">`
- Suppression des Open Graph tags (Facebook, LinkedIn)
- Suppression des Twitter Cards
- Titre modifié avec `[TEST]` préfixe

**Activation :** Automatique sur `test.eclosion-evenements.fr`

### 3. **Détection d'environnement**
Le hook `useBuildInfo.ts` détecte automatiquement l'environnement :
- `test.eclosion-evenements.fr` → **staging** 🟡
- `eclosion-evenements.fr` → **production** 🟢
- `localhost` → **development** 🔵
- `*.vercel.app` → **preview** 🟣

### 4. **Bannière de staging**
Une bannière jaune visible s'affiche sur `test.eclosion-evenements.fr` avec :
- Indication "VERSION STAGING"
- Date de build
- Branche Git
- Hash du commit

---

## 📱 Impact sur mobile et desktop

### ✅ Ce qui fonctionne normalement :
- **Navigation** : Identique à la production
- **Responsive** : Design mobile parfaitement fonctionnel
- **Performances** : Aucun impact négatif
- **Fonctionnalités** : Tout fonctionne (formulaires, liens, etc.)
- **Partage de lien** : Les liens fonctionnent, mais sans preview social

### ❌ Ce qui est bloqué :
- **Indexation Google** : Aucune page n'apparaîtra dans les résultats
- **Cache Google** : Pas de version en cache
- **Recherche Bing** : Idem Google
- **Previews sociaux** : Pas de carte de preview sur Facebook/Twitter/LinkedIn
- **Sitemap** : Aucun sitemap fourni aux moteurs de recherche

### 📲 Test recommandé :
1. Ouvrir `test.eclosion-evenements.fr` sur mobile
2. Vérifier la bannière jaune "VERSION STAGING" en haut à droite
3. Naviguer normalement dans le site
4. Ouvrir la console : voir le message "🔒 Mode STAGING : Indexation bloquée"

---

## 🚀 Configuration Vercel

### Domaines recommandés :
```
Production : eclosion-evenements.fr (branche main)
Staging    : test.eclosion-evenements.fr (branche staging)
```

### Configuration dans Vercel Dashboard :
1. Aller sur le projet Vercel
2. **Settings → Domains**
3. Ajouter `test.eclosion-evenements.fr`
4. Lier au déploiement de la branche `staging`
5. Ajouter `eclosion-evenements.fr` 
6. Lier au déploiement de la branche `main`

### Variables d'environnement (optionnel) :
```bash
# Pour forcer un environnement spécifique
VITE_ENVIRONMENT=staging  # ou production
```

---

## ✅ Checklist de déploiement

### Pour déployer sur STAGING (test.eclosion-evenements.fr) :
- [x] Pousser sur la branche `staging`
- [x] Vérifier que `public/robots.txt` bloque tout
- [x] La bannière jaune doit s'afficher
- [x] Dans la console : "🔒 Mode STAGING : Indexation bloquée"
- [x] Titre de la page commence par `[TEST]`

### Pour déployer sur PRODUCTION (eclosion-evenements.fr) :
- [ ] Pousser sur la branche `main`
- [ ] **IMPORTANT** : Remplacer `public/robots.txt` par le contenu de `public/robots-production.txt`
- [ ] Aucune bannière ne doit s'afficher
- [ ] Dans la console : "✅ Mode PRODUCTION : Indexation autorisée"
- [ ] Titre de la page normal (sans `[TEST]`)

---

## 🔍 Vérification de la protection

### Test 1 : Robots.txt
```bash
curl https://test.eclosion-evenements.fr/robots.txt
# Doit afficher "Disallow: /" pour tous les User-agent
```

### Test 2 : Meta tags
Ouvrir `test.eclosion-evenements.fr` et inspecter :
```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
```

### Test 3 : Google Search Console
Utiliser l'outil "Inspection d'URL" :
- URL : `https://test.eclosion-evenements.fr`
- Résultat attendu : "Bloqué par robots.txt" ou "noindex"

### Test 4 : Recherche Google
```
site:test.eclosion-evenements.fr
```
Résultat attendu : Aucun résultat trouvé

---

## 📞 Support

Si vous constatez que le site staging apparaît dans Google :
1. Vérifier que le domaine est bien `test.eclosion-evenements.fr`
2. Vérifier la présence de la bannière jaune
3. Ouvrir la console et vérifier le message de blocage
4. Forcer le rafraîchissement : `Ctrl + Shift + R` (ou `Cmd + Shift + R` sur Mac)

---

**Dernière mise à jour :** Octobre 2025  
**Version :** 1.0.0  
**Statut :** ✅ Protection active sur test.eclosion-evenements.fr

