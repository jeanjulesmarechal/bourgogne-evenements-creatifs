# 🏗️ Schéma d'architecture - Déploiement Vercel

## 📊 Configuration recommandée (simple et efficace)

```
┌─────────────────────────────────────────────────────────────────┐
│                         VOTRE MACHINE                            │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Git Repository Local                                      │  │
│  │  bourgogne-evenements-creatifs-main/                      │  │
│  │                                                            │  │
│  │  ├─ Branch: main      (code production)                   │  │
│  │  └─ Branch: staging   (code test)                         │  │
│  └───────────────────────────────────────────────────────────┘  │
│                         │                                        │
│                         │ git push                               │
│                         ▼                                        │
└─────────────────────────────────────────────────────────────────┘
                          │
                          │
┌─────────────────────────┼─────────────────────────────────────┐
│                         │           GITHUB                     │
│  ┌──────────────────────▼──────────────────────────────────┐  │
│  │  Repository: bourgogne-evenements-creatifs-main         │  │
│  │                                                          │  │
│  │  ├─ 🟢 Branch: main                                     │  │
│  │  │   └─ Fichier: public/robots.txt (ALLOW)             │  │
│  │  │                                                       │  │
│  │  └─ 🟡 Branch: staging                                  │  │
│  │      └─ Fichier: public/robots.txt (DISALLOW)          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                         │                                       │
│                         │ Webhook automatique                   │
│                         ▼                                       │
└─────────────────────────────────────────────────────────────────┘
                          │
                          │
┌─────────────────────────┼─────────────────────────────────────┐
│                         │          VERCEL                      │
│                         │                                       │
│  ┌──────────────────────▼──────────────────────────────────┐  │
│  │  Projet: bourgogne-evenements-creatifs-main            │  │
│  │                                                          │  │
│  │  Configuration (UNE FOIS)                               │  │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  │
│  │                                                          │  │
│  │  ┌────────────────────────────────────────────────┐    │  │
│  │  │ Déploiement Production #1                      │    │  │
│  │  │                                                 │    │  │
│  │  │ Source Branch : main                           │    │  │
│  │  │ Custom Domain : eclosion-evenements.fr        │    │  │
│  │  │                                                 │    │  │
│  │  │ Build Command : npm run build                  │    │  │
│  │  │ Output Dir    : dist                           │    │  │
│  │  │                                                 │    │  │
│  │  │ Robots.txt    : Allow (indexation ✅)          │    │  │
│  │  │ Meta Tags     : Normaux                        │    │  │
│  │  │ Banner        : Caché                          │    │  │
│  │  └────────────────────────────────────────────────┘    │  │
│  │                                                          │  │
│  │  ┌────────────────────────────────────────────────┐    │  │
│  │  │ Déploiement Production #2 (staging)            │    │  │
│  │  │                                                 │    │  │
│  │  │ Source Branch : staging                        │    │  │
│  │  │ Custom Domain : test.eclosion-evenements.fr   │    │  │
│  │  │                                                 │    │  │
│  │  │ Build Command : npm run build                  │    │  │
│  │  │ Output Dir    : dist                           │    │  │
│  │  │                                                 │    │  │
│  │  │ Robots.txt    : Disallow (indexation 🚫)       │    │  │
│  │  │ Meta Tags     : noindex, nofollow              │    │  │
│  │  │ Banner        : Visible (jaune)                │    │  │
│  │  └────────────────────────────────────────────────┘    │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                         │                                       │
│                         │ Déploiement automatique               │
│                         ▼                                       │
└─────────────────────────────────────────────────────────────────┘
                          │
            ┌─────────────┴─────────────┐
            │                           │
            ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐
│   🟢 PRODUCTION       │   │   🟡 STAGING          │
│                       │   │                       │
│  eclosion-            │   │  test.eclosion-       │
│  evenements.fr        │   │  evenements.fr        │
│                       │   │                       │
│  ✅ Indexé Google     │   │  🚫 NON indexé        │
│  ✅ Public            │   │  🔗 Lien uniquement   │
│  ⚫ Pas de bannière   │   │  🟡 Bannière visible  │
└───────────────────────┘   └───────────────────────┘
```

---

## 🎯 Points clés

### ✅ **CE QU'IL FAUT FAIRE**

```
1. 📁 UN SEUL repository GitHub
   └─ Avec 2 branches (main et staging)

2. ⚙️  Configuration Vercel UNE SEULE FOIS
   └─ Lier main → eclosion-evenements.fr
   └─ Lier staging → test.eclosion-evenements.fr

3. 🚀 Ensuite tout est automatique
   └─ git push origin staging  → Déploie sur test.eclosion-evenements.fr
   └─ git push origin main     → Déploie sur eclosion-evenements.fr
```

### ❌ **CE QU'IL NE FAUT PAS FAIRE**

```
❌ Créer 2 repositories séparés
❌ Utiliser les previews Vercel temporaires
❌ Se connecter à Vercel pour chaque déploiement
❌ Lancer des commandes de build manuellement
❌ Gérer les déploiements manuellement
```

---

## 🔄 Workflow simplifié

### **Phase 1 : Configuration initiale (UNE FOIS)**

```bash
# 1. Sur Vercel Dashboard
Settings → Domains
  ├─ eclosion-evenements.fr      → main
  └─ test.eclosion-evenements.fr → staging

Settings → Git
  └─ Production Branches : main, staging
```

**Durée : 10 minutes maximum**  
**Fréquence : Une seule fois dans la vie du projet**

---

### **Phase 2 : Développement quotidien (AUTOMATIQUE)**

```bash
# Sur votre machine

# Développer une nouvelle fonctionnalité
git checkout staging
# ... faire des modifications ...
git add .
git commit -m "✨ Nouvelle feature"
git push origin staging

# ✅ Vercel build et déploie automatiquement sur test.eclosion-evenements.fr
# ✅ Vous recevez un email de confirmation
# ✅ Pas besoin de vous connecter à Vercel
```

**Durée : 2-3 minutes par déploiement**  
**Fréquence : À chaque fois que vous voulez tester**  
**Action requise : Juste git push**

---

### **Phase 3 : Mise en production (SEMI-AUTOMATIQUE)**

```bash
# 1. Tester sur staging
# Ouvrir test.eclosion-evenements.fr et vérifier

# 2. Si OK, merger vers main
git checkout main
git merge staging

# 3. Activer l'indexation pour production
./scripts/switch-robots.sh production
git add public/robots.txt
git commit -m "✅ Production ready"

# 4. Déployer
git push origin main

# ✅ Vercel build et déploie automatiquement sur eclosion-evenements.fr
# ✅ Site indexé par Google
```

**Durée : 5 minutes**  
**Fréquence : Quand une fonctionnalité est validée sur staging**  
**Action requise : Merge + switch robots.txt + git push**

---

## 🎬 Exemple concret

### **Scénario : Ajouter un nouveau service à votre site**

```bash
# JOUR 1 : Développement
git checkout staging
# ... coder le nouveau service ...
git add .
git commit -m "✨ Ajout service traiteur"
git push origin staging
# → Déploiement auto sur test.eclosion-evenements.fr

# JOUR 2 : Tests
# Vous envoyez le lien test.eclosion-evenements.fr à votre client
# Le client valide ✅

# JOUR 3 : Production
git checkout main
git merge staging
./scripts/switch-robots.sh production
git add public/robots.txt
git commit -m "✅ Service traiteur validé"
git push origin main
# → Déploiement auto sur eclosion-evenements.fr
```

**Nombre de connexions à Vercel : 0** 🎉

---

## 📞 Questions fréquentes

### **Q : Je dois me connecter à Vercel combien de fois ?**
**R : 1 seule fois** pour la configuration initiale, puis **jamais**.

### **Q : Dois-je créer 2 repositories ?**
**R : Non !** 1 seul repo avec 2 branches suffit.

### **Q : C'est quoi la différence entre Preview et Production sur Vercel ?**
**R :** 
- **Preview** : Déploiements temporaires pour les Pull Requests (vous n'en avez pas besoin)
- **Production** : Déploiements stables liés à des branches (ce que vous utilisez)

### **Q : Est-ce que ça coûte plus cher d'avoir 2 domaines ?**
**R : Non !** Le plan gratuit Vercel supporte plusieurs domaines.

### **Q : Que se passe-t-il si je push sur staging ?**
**R :** Vercel détecte automatiquement le push, build votre code et déploie sur `test.eclosion-evenements.fr`. Vous recevez un email de confirmation.

### **Q : Les 2 sites se mettent à jour en même temps ?**
**R : Non !** Chaque branche est indépendante :
- Push sur `staging` → Seul `test.eclosion-evenements.fr` se met à jour
- Push sur `main` → Seul `eclosion-evenements.fr` se met à jour

---

**🎯 En résumé : 1 repo + 2 branches + configuration Vercel UNE FOIS = Déploiements automatiques à vie !**

