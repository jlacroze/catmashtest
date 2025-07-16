import React from "react";
import styles from "./Podium.module.css";

// Type pour un chat du podium
interface PodiumCat {
  id: string;
  name: string;
  imageUrl: string;
  score: number;
}

// Props attendues pour Podium
interface PodiumProps {
  cats: PodiumCat[]; // Doit être de longueur 3
}

// Ordre d'affichage visuel : 2e (gauche), 1er (centre), 3e (droite)
const order = [1, 0, 2];
// Mapping des classes pour chaque place réelle
const placeClass = [styles.place2, styles.place1, styles.place3];

// Composant qui affiche le podium des 3 premiers chats
const Podium: React.FC<PodiumProps> = ({ cats }) => {
  if (cats.length < 3) return null;
  return (
    <div className={styles.podium}>
      {order.map((idx, i) => (
        <div key={cats[idx].id} className={styles.place + " " + placeClass[i]}>
          <div className={styles.rank}>{idx + 1}</div>
          <img
            src={cats[idx].imageUrl}
            alt={cats[idx].name}
            className={styles.img}
          />
          <div className={styles.name}>{cats[idx].name}</div>
          <div className={styles.score}>Score : {cats[idx].score} pts</div>
        </div>
      ))}
    </div>
  );
};

export default Podium;
