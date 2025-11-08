# Guide de déploiement - Site ATPNE

Ce guide vous accompagne dans le déploiement du site web de l'ATPNE sur différents hébergeurs.

## Prérequis

- Node.js version 18 ou supérieure
- Un compte Supabase (gratuit)
- Un hébergeur web (OVH, Vercel, Netlify, etc.)
- Un nom de domaine (optionnel)

## 1. Configuration Supabase

### Création du projet Supabase
1. Créez un compte sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Notez l'URL et les clés API de votre projet
4. Exécutez le script SQL fourni dans `SUPABASE_SETUP.md`

### Configuration des variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_publique_anon
SUPABASE_SERVICE_ROLE_KEY=votre_clé_service_role
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

## 2. Installation et test en local

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build de production (test)
npm run build

# Lancement du serveur de production (test)
npm start
```

## 3. Déploiement sur Vercel (Recommandé)

### Déploiement automatique
1. Connectez votre dépôt GitHub à Vercel
2. Ajoutez les variables d'environnement dans les paramètres Vercel
3. Le déploiement se fait automatiquement

### Déploiement manuel
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel

# Déploiement en production
vercel --prod
```

## 4. Déploiement sur OVH Web Hosting

### Préparation des fichiers
```bash
# Build de production
npm run build
npm run export

# Les fichiers à uploader se trouvent dans le dossier 'out/'
```

### Configuration OVH
1. Accédez à votre espace client OVH
2. Uploadez les fichiers du dossier `out/` via FTP
3. Configurez les redirections dans le fichier `.htaccess` :

```apache
# .htaccess pour OVH
RewriteEngine On

# Redirection HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Gestion des routes Next.js
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache statique
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 5. Déploiement sur Netlify

### Déploiement automatique
1. Connectez votre dépôt GitHub à Netlify
2. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `out`
3. Ajoutez les variables d'environnement
4. Créez un fichier `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 6. Configuration SSL

### Certificat Let's Encrypt (gratuit)
La plupart des hébergeurs modernes proposent SSL gratuit via Let's Encrypt.

### Configuration manuelle
Pour OVH ou autres hébergeurs traditionnels :
1. Commandez un certificat SSL
2. Installez-le via l'interface de gestion
3. Forcez la redirection HTTPS

## 7. Configuration DNS

### Configuration des enregistrements
```
Type    Nom     Valeur
A       @       IP_de_votre_serveur
CNAME   www     votre-domaine.com
```

### Pour Vercel/Netlify
Suivez les instructions de configuration DNS fournies par la plateforme.

## 8. Optimisations post-déploiement

### Performance
- Vérifiez que la compression GZIP est activée
- Configurez la mise en cache des ressources statiques
- Testez les performances avec Google PageSpeed Insights

### SEO
- Configurez Google Search Console
- Ajoutez un sitemap.xml
- Vérifiez les balises meta

### Monitoring
- Configurez Google Analytics (optionnel)
- Surveillez les erreurs avec des outils comme Sentry

## 9. Maintenance

### Sauvegardes
- Sauvegardez régulièrement votre base Supabase
- Sauvegardez les fichiers du site

### Mises à jour
```bash
# Mise à jour des dépendances
npm update

# Vérification des vulnérabilités
npm audit
npm audit fix
```

### Monitoring continu
- Surveillez les performances du site
- Vérifiez les logs d'erreur régulièrement
- Testez les formulaires et fonctionnalités

## Support

En cas de problème :
1. Vérifiez les logs de votre hébergeur
2. Consultez la documentation de Supabase
3. Testez en local pour isoler le problème
4. Contactez le support de votre hébergeur si nécessaire

## Sécurité

### Bonnes pratiques
- Utilisez HTTPS partout
- Gardez vos dépendances à jour
- Configurez correctement les politiques CORS
- Utilisez les politiques RLS de Supabase
- Ne jamais exposer les clés secrètes côté client
