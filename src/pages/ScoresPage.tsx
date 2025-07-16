import React from "react";
import { useCats } from "../hooks/useCats";
import ScoreTable from "../components/ScoreTable";
import Podium from "../components/Podium";
import Header from "../components/Header";
import { Link } from "react-router-dom";

// Page de classement : affiche le podium et la grille des autres chats
const ScoresPage: React.FC = () => {
  // Récupère les chats avec scores et les scores bruts
  const { getCatsWithScores, loading, scores } = useCats();
  // Trie les chats par score décroissant
  const cats = getCatsWithScores().sort((a, b) => b.score - a.score);
  // Les 3 premiers pour le podium
  const podium = cats.slice(0, 3);
  // Les autres pour la grille
  const others = cats.slice(3);
  // Nombre total de matchs joués
  const matchesPlayed = Object.values(scores).reduce((a, b) => a + b, 0);

  if (loading) return <div>Chargement...</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        position: "relative",
      }}
    >
      {/* Header commun */}
      <Header />
      {/* Podium des 3 premiers */}
      <Podium cats={podium} />
      {/* Grille des autres chats */}
      <ScoreTable cats={others} />
      {/* Encart bas de page avec bouton retour et nombre de matchs */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 24,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 12px #22334a22",
            padding: "18px 32px",
            minWidth: 320,
            textAlign: "center",
            pointerEvents: "auto",
            border: "1px solid #e0e6ed",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#22334a",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            Revenir au vote
          </Link>
          <div style={{ fontSize: 13, color: "#22334a99", marginTop: 6 }}>
            {matchesPlayed} matchs joués
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoresPage;
