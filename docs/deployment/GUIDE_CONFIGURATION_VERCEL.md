# 🚀 Guide Configuration Vercel - Architecture Multi-environnements

## 📐 Architecture recommandée (1 repo, 2 branches)

```
GitHub Repository : bourgogne-evenements-creatifs-main
│
├─ Branch: main (production)
│  └─ Déploiement automatique → eclosion-evenements.fr
│     ✅ Indexé par Google
│     ✅ Site public
│
└─ Branch: staging (test)
   └─ Déploiement automatique → test.eclosion-evenements.fr
      🔒 NON indexé
      🔗 Accessible uniquement par lien
```

---

## ✅ **Réponse à vos questions**

### **Q1 : Dois-je créer 2 répertoires GitHub ?**

**NON !** ❌ Vous utilisez **1 seul répertoire** avec **2 branches** :

```bash
# Votre structure actuelle (parfaite)
Repository : bourgogne-evenements-creatifs-main
  ├─ main      (branche production)
  └─ staging   (branche test)
```

**Pourquoi c'est mieux ?**
- ✅ Code synchronisé entre test et production
- ✅ Facile de merger staging → main quand tout est validé
- ✅ Historique Git unifié
- ✅ Une seule configuration Vercel
- ✅ Pas de duplication de code

### **Q2 : Dois-je me connecter à Vercel à chaque fois ?**

**NON !** ❌ Configuration **UNE SEULE FOIS**, puis tout est automatique.

**Après la configuration initiale :**
```bash
# Sur votre machine locale
git push origin staging    # → Déploie automatiquement sur test.eclosion-evenements.fr
git push origin main        # → Déploie automatiquement sur eclosion-evenements.fr
```

**Pas besoin de :**
- ❌ Se connecter à Vercel
- ❌ Cliquer sur des boutons
- ❌ Lancer des commandes de déploiement
- ❌ Gérer des previews manuellement

**Tout est automatique ! 🎉**

### **Q3 : Les previews Vercel sont-elles utilisées ?**

**NON**, vous n'utilisez **PAS les previews** pour votre site de test.

**Vous utilisez des "Production Deployments" avec domaines personnalisés :**

```
┌─────────────────────────────────────────────────────────┐
│  Configuration Vercel                                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🟢 Production Deployment #1                            │
│     Branche : main                                       │
│     Domaine : eclosion-evenements.fr                    │
│     Type    : Production stable                          │
│                                                          │
│  🟡 Production Deployment #2                            │
│     Branche : staging                                    │
│     Domaine : test.eclosion-evenements.fr               │
│     Type    : Production stable (mais protégée SEO)     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

Les deux sont des **déploiements stables et permanents**, pas des previews temporaires.

---

## 🛠️ Configuration Vercel (à faire UNE FOIS)

### **Étape 1 : Se connecter à Vercel**
1. Aller sur https://vercel.com
2. Se connecter avec votre compte GitHub
3. Trouver votre projet `bourgogne-evenements-creatifs-main`

### **Étape 2 : Configurer les domaines**

Dans le dashboard Vercel :

```
Settings → Domains
```

#### **Configuration Domaine 1 - Production**
```
Domain         : eclosion-evenements.fr
Git Branch     : main
Redirect       : -
```

#### **Configuration Domaine 2 - Staging**
```
Domain         : test.eclosion-evenements.fr
Git Branch     : staging
Redirect       : -
```

### **Étape 3 : Configurer les branches de production**

Dans `Settings → Git` :

```
Production Branch   : main
```

**ET** ajouter une branche de production supplémentaire :

```
Settings → Git → Production Branches
└─ Ajouter : staging
```

**Pourquoi ?** Pour que `staging` ait son propre déploiement stable, pas une preview.

### **Étape 4 : Variables d'environnement (optionnel)**

Si vous avez des variables d'environnement différentes entre staging et production :

```
Settings → Environment Variables

VITE_EMAILJS_SERVICE_ID
  ├─ Production : your_prod_service_id
  └─ Preview    : your_staging_service_id

VITE_RECAPTCHA_SITE_KEY
  ├─ Production : your_prod_recaptcha_key
  └─ Preview    : your_staging_recaptcha_key
```

---

## 🔄 Workflow quotidien (après configuration)

### **Pour travailler sur des nouvelles fonctionnalités :**

```bash
# 1. Développer en local
git checkout staging
npm run dev

# 2. Faire vos modifications
# ... code ...

# 3. Commiter et pousser
git add .
git commit -m "✨ Nouvelle fonctionnalité"
git push origin staging

# ✅ Vercel déploie automatiquement sur test.eclosion-evenements.fr
# Vous recevez un email de confirmation
# Pas besoin de vous connecter !
```

### **Pour déployer en production (quand le test est validé) :**

```bash
# 1. Merger staging vers main
git checkout main
git merge staging

# 2. Mettre à jour le robots.txt pour la production
./scripts/switch-robots.sh production
git add public/robots.txt
git commit -m "✅ SEO: Production - Autorisation indexation"

# 3. Pousser
git push origin main

# ✅ Vercel déploie automatiquement sur eclosion-evenements.fr
```

---

## 🏗️ Architecture alternative (si vous préférez)

Si vous voulez **vraiment** 2 repositories séparés (moins recommandé) :

```
Repository 1 : eclosion-production
├─ Branch: main
└─ Deploy: eclosion-evenements.fr

Repository 2 : eclosion-staging
├─ Branch: main
└─ Deploy: test.eclosion-evenements.fr
```

**Inconvénients :**
- ❌ Code dupliqué
- ❌ Synchronisation manuelle entre les repos
- ❌ 2 configurations Vercel
- ❌ Risque de divergence entre staging et production
- ❌ Plus complexe à maintenir

**👉 Je recommande fortement l'architecture 1 repo / 2 branches**

---

## 🎯 Comparaison des approches

### **Approche 1 : 1 Repo + 2 Branches (RECOMMANDÉE) ✅**

| Aspect | Détail |
|--------|--------|
| **Repos GitHub** | 1 seul |
| **Branches** | `main` + `staging` |
| **Configuration Vercel** | Une seule fois |
| **Déploiements** | Automatiques sur push |
| **Synchronisation** | Facile (git merge) |
| **Maintenance** | Simple |
| **Connexion Vercel** | Jamais (après config initiale) |

### **Approche 2 : 2 Repos séparés (PAS RECOMMANDÉE) ❌**

| Aspect | Détail |
|--------|--------|
| **Repos GitHub** | 2 séparés |
| **Branches** | `main` sur chacun |
| **Configuration Vercel** | 2 fois |
| **Déploiements** | Automatiques sur push |
| **Synchronisation** | Difficile (copie manuelle) |
| **Maintenance** | Complexe |
| **Connexion Vercel** | Jamais (après config initiale) |

---

## 📋 Checklist de configuration (à faire une fois)

- [ ] **1. Connecter GitHub à Vercel** (si pas déjà fait)
- [ ] **2. Importer le projet** `bourgogne-evenements-creatifs-main`
- [ ] **3. Ajouter le domaine** `eclosion-evenements.fr` → branche `main`
- [ ] **4. Ajouter le domaine** `test.eclosion-evenements.fr` → branche `staging`
- [ ] **5. Marquer `staging` comme Production Branch** (Settings → Git)
- [ ] **6. Configurer les variables d'environnement** (si nécessaire)
- [ ] **7. Tester** : Push sur `staging` → Vérifier déploiement automatique

**Après cette checklist, vous n'aurez PLUS JAMAIS besoin de vous connecter à Vercel !**

---

## 🔍 Vérification après configuration

### **Test 1 : Déploiement automatique staging**
```bash
# Faire un petit changement
echo "# Test" >> README.md
git add README.md
git commit -m "test: Vérification déploiement auto staging"
git push origin staging

# Attendre 2-3 minutes
# Vérifier que test.eclosion-evenements.fr est mis à jour
```

### **Test 2 : Déploiement automatique production**
```bash
git checkout main
git merge staging
git push origin main

# Attendre 2-3 minutes
# Vérifier que eclosion-evenements.fr est mis à jour
```

### **Test 3 : Notifications Vercel**
Vous devriez recevoir des emails de Vercel :
- ✅ "Deployment Ready" quand le build est terminé
- ❌ "Deployment Failed" si erreur

---

## 💡 Résumé en une phrase

**Vous configurez Vercel UNE FOIS pour lier 2 domaines à 2 branches du même repo, puis tout est automatique sur chaque `git push` - pas besoin de 2 repos ni de vous reconnecter à Vercel.**

---

## 🆘 Besoin d'aide ?

Si vous avez des questions pendant la configuration Vercel, je peux vous guider étape par étape !

**Date :** Octobre 2025  
**Version :** 1.0.0

