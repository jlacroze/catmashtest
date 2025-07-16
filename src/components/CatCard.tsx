import React from "react";
import styles from "./CatCard.module.css";

// Props attendues pour CatCard
interface CatCardProps {
  id: string; // Identifiant du chat
  name: string; // Nom du chat
  imageUrl: string; // URL de l'image du chat
  score?: number; // Score à afficher (optionnel)
  onVote?: () => void; // Fonction appelée lors d'un vote (optionnel)
}

// Composant d'affichage d'un chat (image, nom, score, bouton J'aime)
const CatCard: React.FC<CatCardProps> = ({ name, imageUrl, score, onVote }) => {
  return (
    <div className={styles.card}>
      {/* Image du chat */}
      <img src={imageUrl} alt={name} className={styles.image} />
      {/* Nom du chat */}
      <div className={styles.name}>{name}</div>
      {/* Score si fourni */}
      {score !== undefined && (
        <div className={styles.score}>Score : {score}</div>
      )}
      {/* Bouton J'aime si onVote est fourni (page de vote) */}
      {onVote && (
        <button className={styles.likeBtn} onClick={onVote} type="button">
          J'aime
        </button>
      )}
    </div>
  );
};

export default CatCard;
