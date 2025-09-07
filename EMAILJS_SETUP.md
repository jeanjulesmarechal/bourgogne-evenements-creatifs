# Configuration EmailJS

## 🚀 Installation et Configuration

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit
- Vérifiez votre email

### 2. Configurer un service email
- Dans le dashboard, allez dans "Email Services"
- Ajoutez votre service email (Gmail, Outlook, etc.)
- Suivez les instructions de configuration

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Créez un nouveau template
- Utilisez ces variables dans votre template :

```
Sujet: Nouvelle demande de contact - {{from_name}}

Bonjour,

Vous avez reçu une nouvelle demande de contact :

Nom: {{from_name}}
Email: {{from_email}}
Société: {{company}}
Téléphone: {{phone}}
Type de projet: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

Token reCAPTCHA: {{recaptcha_token}}
Date d'envoi: {{timestamp}}

Cordialement,
ECLOSION
```

### 4. Récupérer les clés
- **Service ID** : Dans "Email Services" > votre service
- **Template ID** : Dans "Email Templates" > votre template
- **Public Key** : Dans "Account" > "API Keys"

### 5. Configurer le fichier
Modifiez `src/config/emailjs.ts` :

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'votre_service_id',
  templateId: 'votre_template_id',
  publicKey: 'votre_public_key',
};
```

## 🛡️ Protection Anti-Spam

### Fonctionnalités implémentées :
- ✅ **reCAPTCHA v3** : Protection invisible contre les bots
- ✅ **Rate Limiting** : 1 email par minute maximum
- ✅ **Honeypot** : Champ caché pour détecter les bots
- ✅ **Validation stricte** : Vérification des formats et longueurs
- ✅ **Validation côté client** : Contrôles avant envoi

### Configuration reCAPTCHA :
1. Allez sur [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Créez un site avec reCAPTCHA v3
3. Récupérez votre clé publique
4. Modifiez `src/components/ReCaptchaProvider.tsx` :

```typescript
const recaptchaSiteKey = 'votre_cle_recaptcha';
```

## 📧 Test du formulaire

### Pour tester :
1. Remplissez le formulaire
2. Vérifiez que reCAPTCHA fonctionne (badge en bas à droite)
3. Soumettez le formulaire
4. Vérifiez votre boîte email

### En cas de problème :
- Vérifiez la console du navigateur
- Vérifiez que les clés sont correctes
- Vérifiez que le service email est configuré
- Vérifiez que le template utilise les bonnes variables

## 🔧 Personnalisation

### Modifier les champs :
- Ajoutez/supprimez des champs dans `src/pages/Contact.tsx`
- Mettez à jour le template EmailJS
- Modifiez la validation dans `src/hooks/useEmailJS.ts`

### Modifier les messages :
- Messages d'erreur dans `useEmailJS.ts`
- Messages de succès dans `Contact.tsx`
- Validation dans `validateFormData()`

## 📊 Limites gratuites

### EmailJS (gratuit) :
- 200 emails/mois
- 2 services email
- 2 templates

### reCAPTCHA (gratuit) :
- 1 million de requêtes/mois
- Illimité pour les sites légitimes

## 🚀 Déploiement

### Variables d'environnement (optionnel) :
Créez un fichier `.env.local` :

```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
VITE_RECAPTCHA_SITE_KEY=votre_cle_recaptcha
```

Puis modifiez les fichiers de config pour utiliser `import.meta.env.VITE_*`

