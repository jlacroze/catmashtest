import React, { useMemo, useState } from "react";
import { useCats } from "../hooks/useCats";
import VotePanel from "../components/VotePanel";
import Header from "../components/Header";
import { Link } from "react-router-dom";

// Page de vote : permet de voter pour le chat le plus mignon
const VotePage: React.FC = () => {
  // Récupère les chats, la fonction de vote et les scores
  const { cats, loading, vote, scores } = useCats();
  // Indices des 2 chats affichés
  const [pair, setPair] = useState<[number, number] | null>(null);
  // Pour gérer l'animation de vote (optionnel)
  const [voted, setVoted] = useState(false);

  // Sélectionne 2 chats aléatoires à chaque chargement ou vote
  useMemo(() => {
    if (cats.length < 2) return;
    const idx1 = Math.floor(Math.random() * cats.length);
    let idx2;
    do {
      idx2 = Math.floor(Math.random() * cats.length);
    } while (idx2 === idx1);
    setPair([idx1, idx2]);
  }, [cats]);

  if (loading || !pair) return <div>Chargement...</div>;

  // Fonction appelée lors d'un vote
  const handleVote = (winnerId: string, loserId: string) => {
    vote(winnerId, loserId); // Met à jour les scores
    setVoted(true); // (optionnel) pour feedback
    setTimeout(() => {
      // Nouvelle paire aléatoire après le vote
      const idx1 = Math.floor(Math.random() * cats.length);
      let idx2;
      do {
        idx2 = Math.floor(Math.random() * cats.length);
      } while (idx2 === idx1);
      setPair([idx1, idx2]);
      setVoted(false);
    }, 350);
  };

  // Calcule le nombre total de matchs joués (somme des scores)
  const matchesPlayed = Object.values(scores).reduce((a, b) => a + b, 0);

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
      {/* Zone centrale avec séparation pointillée et VotePanel */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          minHeight: 350,
        }}
      >
        {/* Séparation centrale pointillée */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 0,
            borderLeft: "2px dashed #22334a22",
            zIndex: 0,
          }}
        />
        <VotePanel cats={[cats[pair[0]], cats[pair[1]]]} onVote={handleVote} />
        {/* Feedback visuel après vote */}
        {voted && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              color: "#22334a",
              borderRadius: 16,
              boxShadow: "0 2px 16px #22334a22",
              padding: "32px 48px",
              fontSize: 24,
              fontWeight: 700,
              zIndex: 10,
              opacity: 0.97,
              pointerEvents: "none",
              transition: "opacity 0.2s",
            }}
          >
            Merci pour votre vote !
          </div>
        )}
      </div>
      {/* Encart bas de page avec lien classement et nombre de matchs */}
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
            to="/scores"
            style={{
              color: "#22334a",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            Voir le classement des chats
          </Link>
          <div style={{ fontSize: 13, color: "#22334a99", marginTop: 6 }}>
            {matchesPlayed} matchs joués
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotePage;
