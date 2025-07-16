import React from "react";
import CatCard from "./CatCard";
import styles from "./ScoreTable.module.css";

// Type pour un chat avec score
interface Cat {
  id: string;
  name: string;
  imageUrl: string;
  score: number;
}

// Props attendues pour ScoreTable
interface ScoreTableProps {
  cats: Cat[]; // Liste des chats à afficher
}

// Composant qui affiche une grille de chats avec leur score
const ScoreTable: React.FC<ScoreTableProps> = ({ cats }) => {
  return (
    <div className={styles.table}>
      {cats.map((cat) => (
        <CatCard key={cat.id} {...cat} score={cat.score} />
      ))}
    </div>
  );
};

export default ScoreTable;
