# 🛠️ Scripts utilitaires

## 📜 switch-robots.sh

Script pour basculer facilement entre les configurations robots.txt de staging et production.

### Usage

```bash
# Pour activer le mode STAGING (blocage indexation)
./scripts/switch-robots.sh staging

# Pour activer le mode PRODUCTION (autoriser indexation)
./scripts/switch-robots.sh production

# Afficher l'aide
./scripts/switch-robots.sh help
```

### Fonctionnalités

- ✅ Bascule automatique entre staging/production
- 💾 Crée une sauvegarde avant modification
- 🎨 Affichage coloré et informatif
- 🔍 Affiche le contenu du fichier après modification
- ⚠️ Vérifie si la configuration est déjà active

### Quand l'utiliser ?

**Avant de déployer sur staging :**
```bash
./scripts/switch-robots.sh staging
git add public/robots.txt
git commit -m "🔒 SEO: Blocage indexation"
git push origin staging
```

**Avant de déployer sur production :**
```bash
./scripts/switch-robots.sh production
git add public/robots.txt
git commit -m "✅ SEO: Autorisation indexation"
git push origin main
```

### Note importante

⚠️ **Ce script modifie directement le fichier `public/robots.txt`**

Assurez-vous de :
1. Exécuter le bon mode avant chaque déploiement
2. Commiter le changement avec git
3. Vérifier que le fichier est correctement configuré après déploiement

---

**Date de création :** Octobre 2025  
**Auteur :** Configuration SEO automatisée

