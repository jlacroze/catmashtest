# CatMash

Mini-application web pour élire le chat le plus mignon, inspirée de Facemash.

## 🚀 Fonctionnalités

- Vote entre deux chats aléatoires
- Classement en temps réel avec podium (or, argent, bronze)
- Scores persistés en localStorage
- Design responsive, moderne, et accessible
- Tests unitaires sur tous les composants et la logique métier

## 🛠️ Stack technique

- **React** + **TypeScript**
- **CSS Modules** (pas de librairie de composants)
- **Vite** (dev server)
- **Jest** + **React Testing Library** (tests)

## 📁 Structure du projet

```
src/
  components/
    CatCard.tsx         // Carte chat (image, nom, score, bouton)
    VotePanel.tsx       // Affiche 2 chats pour voter
    ScoreTable.tsx      // Grille des chats et scores
    Podium.tsx          // Podium top 3
    Header.tsx          // Logo + titre
  hooks/
    useCats.ts          // Hook pour charger et gérer les chats/scores
  pages/
    VotePage.tsx        // Page de vote
    ScoresPage.tsx      // Page classement
  data/
    cats.json           // Données locales (à placer dans public/data/)
  App.tsx, main.tsx     // Routing principal
  index.css             // Styles globaux
```

## ▶️ Lancer le projet

```bash
cd test-chats
# Installer les dépendances
yarn install
# Lancer le serveur de dev
yarn dev
```

## 🧪 Lancer les tests

```bash
yarn jest
```

Tous les composants et la logique métier sont couverts par des tests unitaires (voir `src/components/*.test.tsx` et `src/hooks/useCats.test.ts`).

## 📝 Choix et organisation du code

- **Séparation claire** entre composants, hooks, pages.
- **Commentaires** dans tous les fichiers pour faciliter la review.
- **Podium** : 1er (or, centre, plus grand), 2e (argent, gauche), 3e (bronze, droite).
- **Aucune dépendance UI externe** (100% CSS Modules).
- **Scores** stockés localement (pas d’API d’écriture).

## 🌐 Déploiement

- Le projet peut être déployé sur Vercel, Netlify, ou tout hébergeur statique compatible React/Vite.
- Placer le fichier `cats.json` dans `public/data/` pour éviter les problèmes de CORS.

## 👨‍💻 Auteur & contact

- Réalisé par [Votre nom]
- Pour toute question, contactez-moi sur GitHub ou par email.

---

**Bon CatMash ! 🐾**
