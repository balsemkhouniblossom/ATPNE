# Association Tunisienne de Protection de la Nature et de l'Environnement de Korba (ATPNE)

Site web moderne et responsive développé avec **Next.js 14**, **TypeScript**, **Tailwind CSS** et **Supabase** pour l'Association Tunisienne de Protection de la Nature et de l'Environnement de Korba.

## 🌟 Fonctionnalités principales

### Pages publiques
- **Accueil** : Présentation, actualités, projets en avant-première, statistiques
- **À propos** : Histoire, mission, valeurs, équipe de l'association
- **Nos actions** : Liste détaillée des projets passés, en cours et à venir
- **Événements** : Calendrier des événements et galerie multimédia
- **Actualités** : Blog dynamique avec système de catégories
- **Galerie** : Albums photos et vidéos classés par thème
- **Devenir membre** : Formulaire d'adhésion en ligne
- **Contact** : Formulaire de contact et informations de localisation

### Fonctionnalités techniques
- **Design responsive** adapté mobile/tablette/desktop
- **Charte graphique** moderne (vert, bleu, beige) avec animations légères
- **Navigation sticky** avec menu hamburger sur mobile
- **Optimisation SEO** et performance
- **Conformité RGPD** (mentions légales, politique de confidentialité)
- **Intégration Supabase** pour la gestion sécurisée des données
- **Système de gestion de contenu** pour les actualités et projets

## 🚀 Installation et configuration

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte Supabase (gratuit)

### Installation locale
```bash
# 1. Cloner ou télécharger le projet
cd votre-dossier-projet

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés Supabase

# 4. Configurer la base de données
# Voir SUPABASE_SETUP.md pour les instructions

# 5. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Configuration Supabase
1. Créez un projet sur [supabase.com](https://supabase.com)
2. Suivez les instructions dans `SUPABASE_SETUP.md`
3. Copiez vos clés dans `.env.local`

## 📁 Structure du projet

```
/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── about/          # Page À propos
│   │   ├── contact/        # Page Contact
│   │   ├── membership/     # Page Adhésion
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/         # Composants React réutilisables
│   │   ├── home/          # Composants page d'accueil
│   │   └── layout/        # Composants layout (nav, footer)
│   ├── lib/               # Utilitaires et configuration
│   │   └── supabase.ts    # Configuration Supabase
│   └── types/             # Types TypeScript
├── public/                # Ressources statiques
├── .env.example          # Template variables d'environnement
├── SUPABASE_SETUP.md     # Guide configuration Supabase
├── DEPLOYMENT.md         # Guide de déploiement
└── package.json          # Dépendances et scripts
```

## 🎨 Charte graphique

- **Couleur primaire** : Vert (#22c55e) - Nature, croissance
- **Couleur secondaire** : Bleu (#3b82f6) - Confiance, stabilité  
- **Couleur accent** : Beige/Orange (#f59e0b) - Chaleur, énergie
- **Typographie** : Inter (texte) + Poppins (titres)
- **Animations** : Transitions douces, effets de hover subtils

## 🛠️ Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

## 🚀 Déploiement

### Déploiement recommandé (Vercel)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### Autres options
- **Netlify** : Déploiement automatique via Git
- **OVH Web Hosting** : Upload des fichiers statiques
- **VPS/Serveur dédié** : Déploiement avec PM2 ou Docker

Voir `DEPLOYMENT.md` pour les instructions détaillées.

## 📊 Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Base de données** : Supabase (PostgreSQL)
- **Authentification** : Supabase Auth
- **Icônes** : Lucide React
- **Animations** : Framer Motion

## 🔒 Sécurité et RGPD

- Politiques RLS (Row Level Security) configurées
- Validation côté serveur des formulaires
- Protection des données personnelles
- Mentions légales et politique de confidentialité
- Conformité RGPD intégrée

## 📈 Performance et SEO

- **Optimisations** : Images optimisées, lazy loading, compression
- **SEO** : Balises meta, sitemap, structure sémantique
- **Accessibilité** : Contraste, navigation clavier, alt text
- **Analytics** : Prêt pour Google Analytics (optionnel)

## 🤝 Contribution

Ce projet est conçu pour être facilement maintenable :
- Code commenté et documenté
- Structure modulaire et évolutive  
- Composants réutilisables
- Configuration TypeScript stricte

## 📞 Support

Pour toute question ou problème :
1. Consultez la documentation dans les fichiers `.md`
2. Vérifiez les logs d'erreur
3. Testez en local pour isoler le problème
4. Ouvrez une issue si nécessaire

## 📄 Licence

Projet open source développé pour l'ATPNE. 
Libre d'être adapté et personnalisé selon les besoins de l'association.

---

**Développé avec ❤️ pour la protection de l'environnement**
