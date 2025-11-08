# Comment ajouter votre logo personnalisé

## 📁 Structure des fichiers

Placez vos fichiers de logo dans le dossier :
```
public/images/logos/
```

## 🖼️ Types de fichiers acceptés

- **Logo complet** : `atpne-logo.webp` (recommandé : 200x50px ou ratio 4:1)
- **Icône seule** : `atpne-icon.webp` (recommandé : 50x50px, format carré)
- **Formats supportés** : WebP (optimal), PNG, JPG

## 🎨 Formats recommandés

### Logo principal (atpne-logo.webp)
- **Dimensions** : 200x50 pixels (ou multiples de ce ratio)
- **Format** : WebP (optimal pour la performance) ou PNG avec transparence
- **Contenu** : Logo + texte "ATPNE" si souhaité
- **Fond** : Transparent
- **Qualité** : 85-95% pour un bon équilibre taille/qualité

### Icône (atpne-icon.webp)
- **Dimensions** : 50x50 pixels (format carré)
- **Format** : WebP (optimal) ou PNG avec transparence
- **Contenu** : Symbole/icône seul
- **Fond** : Transparent

## 📋 Instructions d'installation

### Étape 1 : Préparer vos fichiers
1. Redimensionnez votre logo aux bonnes dimensions
2. Sauvegardez en format PNG avec transparence
3. Nommez les fichiers :
   - `atpne-logo.webp` (logo complet)
   - `atpne-icon.webp` (icône seule, optionnel)

### Étape 2 : Copier les fichiers
1. Ouvrez le dossier `public/images/logos/`
2. Copiez vos fichiers dans ce dossier
3. Assurez-vous que les noms correspondent exactement

### Étape 3 : Redémarrer le serveur
```bash
npm run dev
```

## 🔧 Personalisation avancée

### Changer les tailles
Dans `src/components/Logo.tsx`, vous pouvez modifier :

```javascript
const sizeClasses = {
  sm: { image: 'h-8 w-auto' },   // Petit
  md: { image: 'h-10 w-auto' },  // Moyen  
  lg: { image: 'h-12 w-auto' },  // Grand
  xl: { image: 'h-16 w-auto' }   // Très grand
}
```

### Utiliser le logo
Le composant Logo est automatiquement utilisé dans :
- **Navbar** : Logo en haut de page
- **Footer** : Logo en bas de page
- **Partout** : Vous pouvez l'importer et l'utiliser

### Variantes disponibles
```tsx
<Logo variant="full" size="md" />        // Logo complet
<Logo variant="icon-only" size="sm" />   // Icône seule
<Logo variant="text-only" size="lg" />   // Texte seul
```

## 🚨 Fallback automatique

Si votre image ne se charge pas :
- Le système retombe automatiquement sur l'icône feuille verte
- Aucune interruption de service
- Vous pouvez corriger le fichier image sans urgence

## 💡 Conseils design

### Pour un meilleur rendu :
1. **Contraste** : Assurez-vous que le logo est visible sur fond blanc (navbar) et foncé (footer)
2. **Simplicité** : Évitez les détails trop fins qui ne seraient pas visibles en petit
3. **Cohérence** : Gardez la même palette de couleurs que votre charte (vert/bleu/beige)

### Exemples de bonnes dimensions :
- **Navbar** : Logo de 150x40px maximum
- **Footer** : Logo de 120x32px maximum
- **Favicon** : 32x32px (icône seule)

## ❓ Dépannage

### Le logo ne s'affiche pas ?
1. Vérifiez le nom du fichier (exactement `atpne-logo.webp`)
2. Vérifiez l'emplacement (`public/images/logos/`)
3. Redémarrez le serveur (`npm run dev`)
4. Vérifiez la console du navigateur (F12) pour les erreurs

### Le logo est déformé ?
1. Respectez les proportions recommandées
2. Utilisez un format WebP ou PNG avec transparence
3. Ajustez la taille dans le composant si nécessaire

---

🌿 **Votre logo ATPNE sera maintenant visible partout sur le site !**
