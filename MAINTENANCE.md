# Guide de maintenance - Site ATPNE

Ce guide vous aide à maintenir et mettre à jour le site web de l'ATPNE.

## 🔧 Maintenance quotidienne

### Vérifications à effectuer
- **Formulaires** : Tester les formulaires de contact et d'adhésion
- **Images** : Vérifier que toutes les images s'affichent correctement
- **Navigation** : Tester tous les liens et la navigation
- **Responsive** : Vérifier l'affichage sur mobile et tablette

### Sauvegarde
```bash
# Sauvegarde de la base de données Supabase
# Via l'interface Supabase : Settings > Database > Backup

# Sauvegarde du code source
git add .
git commit -m "Sauvegarde quotidienne"
git push origin main
```

## 📝 Gestion du contenu

### Ajouter une actualité
1. Accédez à votre projet Supabase
2. Allez dans l'onglet "Table Editor"
3. Sélectionnez la table "news"
4. Cliquez sur "Insert" > "Insert row"
5. Remplissez les champs :
   - **title** : Titre de l'actualité
   - **content** : Contenu complet (Markdown supporté)
   - **excerpt** : Résumé court
   - **category** : Catégorie (Action environnementale, Éducation, etc.)
   - **image_url** : URL de l'image
   - **published** : true pour publier

### Ajouter un projet
1. Même procédure avec la table "projects"
2. Champs importants :
   - **status** : 'planned', 'ongoing', ou 'completed'
   - **location** : Lieu du projet
   - **start_date** / **end_date** : Dates au format YYYY-MM-DD

### Gérer les membres
- Consulter la table "members" pour voir les nouvelles adhésions
- Exporter les données si nécessaire
- Supprimer les doublons ou les inscriptions test

### Messages de contact
- Vérifier régulièrement la table "contact_messages"
- Répondre aux messages dans les 48h
- Archiver ou supprimer les anciens messages

## 🔄 Mises à jour

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour les dépendances mineures
npm update

# Mettre à jour les dépendances majeures (avec précaution)
npm install next@latest react@latest

# Vérifier les vulnérabilités
npm audit
npm audit fix
```

### Mise à jour du contenu statique
- Modifier les fichiers dans `/src/app/` pour les pages
- Modifier les composants dans `/src/components/`
- Redéployer après les modifications

## 🖼️ Gestion des images

### Bonnes pratiques
- Utiliser des images optimisées (WebP si possible)
- Taille maximale : 1920px de largeur
- Compresser les images avant upload
- Utiliser des services comme Unsplash pour les images libres

### Hébergement des images
- **Option 1** : Supabase Storage (gratuit jusqu'à 1GB)
- **Option 2** : Services externes (Cloudinary, ImageKit)
- **Option 3** : Dossier `/public` pour les images fixes

### Upload via Supabase Storage
```javascript
// Exemple de fonction d'upload
const uploadImage = async (file) => {
  const { data, error } = await supabase.storage
    .from('images')
    .upload(`news/${Date.now()}-${file.name}`, file)
  
  if (error) throw error
  return data.path
}
```

## 🔍 Monitoring et analytics

### Surveillance des performances
- Utiliser Google PageSpeed Insights
- Vérifier les Core Web Vitals
- Surveiller le temps de chargement

### Analytics (optionnel)
```javascript
// Google Analytics 4 - Ajout dans layout.tsx
import Script from 'next/script'

// Dans le <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

## 🐛 Résolution des problèmes

### Problèmes courants

#### "Page non trouvée" (404)
- Vérifier que le fichier `page.tsx` existe dans le bon dossier
- Vérifier la structure des dossiers dans `/src/app/`
- Redémarrer le serveur de développement

#### "Erreur de base de données"
- Vérifier les variables d'environnement
- Contrôler les politiques RLS dans Supabase
- Vérifier la syntaxe des requêtes SQL

#### "Images qui ne s'affichent pas"
- Vérifier les URLs des images
- Contrôler les CORS si images externes
- Optimiser les images trop lourdes

#### "Formulaires qui ne fonctionnent pas"
- Vérifier les champs requis
- Contrôler la validation côté client
- Vérifier les permissions Supabase

### Logs et débogage
```bash
# Voir les logs de développement
npm run dev

# Voir les logs de production (si hébergé)
# Consulter l'interface de votre hébergeur

# Déboguer une page spécifique
# Ouvrir les outils développeur du navigateur (F12)
```

## 📱 Tests sur mobile

### Outils de test
- Chrome DevTools (Responsive Design Mode)
- BrowserStack pour tests multi-appareils
- Tests manuels sur vrais appareils

### Points à vérifier
- Navigation tactile
- Taille des boutons (minimum 44px)
- Lisibilité du texte
- Vitesse de chargement
- Fonctionnement des formulaires

## 🔐 Sécurité

### Vérifications régulières
```bash
# Audit de sécurité des dépendances
npm audit

# Correction automatique des vulnérabilités mineures
npm audit fix

# Mise à jour manuelle pour les vulnérabilités critiques
npm audit fix --force  # (avec précaution)
```

### Bonnes pratiques
- Garder les dépendances à jour
- Ne jamais exposer les clés secrètes
- Utiliser HTTPS partout
- Configurer correctement les CORS
- Surveiller les tentatives d'intrusion

## 📊 Rapports et statistiques

### Données Supabase
```sql
-- Nombre de nouveaux membres par mois
SELECT 
  DATE_TRUNC('month', created_at) as month,
  COUNT(*) as new_members
FROM members 
GROUP BY month 
ORDER BY month DESC;

-- Messages de contact par catégorie
SELECT 
  subject, 
  COUNT(*) as count 
FROM contact_messages 
GROUP BY subject 
ORDER BY count DESC;
```

### Rapports à générer
- Statistiques d'adhésion mensuelle
- Messages de contact par catégorie
- Articles les plus consultés
- Performance des formulaires

## 🆘 Support et escalade

### Contacts utiles
- **Hébergeur** : Support technique de votre fournisseur
- **Supabase** : Documentation + Discord communautaire
- **Next.js** : Documentation officielle + GitHub Issues

### Ressources de dépannage
1. Documentation officielle des technologies utilisées
2. Stack Overflow pour les problèmes techniques
3. Communauté Discord/Slack des frameworks
4. Logs détaillés de l'application

### Escalade des problèmes
1. **Niveau 1** : Redémarrage, vérifications basiques
2. **Niveau 2** : Consultation des logs, tests isolés
3. **Niveau 3** : Contact support hébergeur/fournisseur
4. **Niveau 4** : Intervention développeur externe

---

## 📋 Checklist de maintenance mensuelle

- [ ] Sauvegarde complète (code + base de données)
- [ ] Mise à jour des dépendances
- [ ] Audit de sécurité
- [ ] Test complet du site (toutes les pages)
- [ ] Vérification des performances
- [ ] Nettoyage des anciennes données
- [ ] Génération des rapports statistiques
- [ ] Vérification de l'espace disque/bande passante
- [ ] Test des formulaires et fonctionnalités critiques
- [ ] Mise à jour du contenu (si nécessaire)

Ce guide doit être adapté selon vos besoins spécifiques et l'évolution du site.
