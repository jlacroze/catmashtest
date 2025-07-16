import React from "react";
import CatCard from "./CatCard";
import styles from "./VotePanel.module.css";

// Type pour un chat minimal
interface Cat {
  id: string;
  name: string;
  imageUrl: string;
}

// Props attendues pour VotePanel
interface VotePanelProps {
  cats: Cat[]; // Tableau de 2 chats à afficher
  onVote: (winnerId: string, loserId: string) => void; // Fonction de vote
}

// Composant qui affiche 2 chats côte à côte pour voter
const VotePanel: React.FC<VotePanelProps> = ({ cats, onVote }) => {
  if (cats.length < 2) return <div>Chargement...</div>;
  return (
    <div className={styles.panel}>
      {/* Premier chat avec bouton J'aime */}
      <CatCard {...cats[0]} onVote={() => onVote(cats[0].id, cats[1].id)} />
      {/* Deuxième chat avec bouton J'aime */}
      <CatCard {...cats[1]} onVote={() => onVote(cats[1].id, cats[0].id)} />
    </div>
  );
};

export default VotePanel;
