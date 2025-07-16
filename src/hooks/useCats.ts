import { useEffect, useState } from "react";

// Type de base pour un chat
export interface Cat {
  id: string; // Identifiant unique du chat
  name: string; // Nom affiché (généré localement)
  imageUrl: string; // URL de l'image du chat
}

// Type étendu pour un chat avec son score
export interface CatWithScore extends Cat {
  score: number;
}

// Chemin du fichier JSON local contenant les chats
const CATS_API = "/data/cats.json";
// Clé de stockage local pour les scores
const SCORES_KEY = "catmash_scores";

// Récupère les scores depuis le localStorage (ou objet vide si absent)
function getInitialScores(): Record<string, number> {
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Hook principal pour charger les chats, gérer les scores et le vote
export function useCats() {
  // Liste des chats (sans score)
  const [cats, setCats] = useState<Cat[]>([]);
  // Dictionnaire des scores par id de chat
  const [scores, setScores] = useState<Record<string, number>>(
    getInitialScores()
  );
  // Indique si le chargement est en cours
  const [loading, setLoading] = useState(true);

  // Charge les chats depuis le fichier JSON local au premier rendu
  useEffect(() => {
    fetch(CATS_API)
      .then((res) => res.json())
      .then((data) => {
        // Mapping : l'API fournit 'url' et 'id', on génère un nom localement
        const mapped = data.images.map(
          (cat: { id: string; url: string }, i: number) => ({
            id: cat.id,
            name: `Chat ${i + 1}`,
            imageUrl: cat.url,
          })
        );
        setCats(mapped);
        setLoading(false);
      });
  }, []);

  // Sauvegarde les scores dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  }, [scores]);

  // Fonction pour voter : incrémente le score du gagnant
  function vote(winnerId: string, loserId: string) {
    setScores((prev) => ({
      ...prev,
      [winnerId]: (prev[winnerId] || 0) + 1,
      [loserId]: prev[loserId] || 0, // S'assure que le perdant a bien une entrée
    }));
  }

  // Retourne la liste des chats avec leur score actuel
  function getCatsWithScores(): CatWithScore[] {
    return cats.map((cat) => ({
      ...cat,
      score: scores[cat.id] || 0,
    }));
  }

  // Expose les données et fonctions utiles au reste de l'app
  return { cats, scores, loading, vote, getCatsWithScores };
}
