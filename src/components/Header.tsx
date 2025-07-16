import React from "react";

// Composant Header : affiche le logo et le titre de l'application
const logoStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  display: "block",
  margin: "0 auto 8px auto",
};

const Header: React.FC = () => (
  <header style={{ textAlign: "center", margin: "32px 0 24px 0" }}>
    {/* Placeholder logo SVG */}
    <svg
      style={logoStyle}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="12" width="32" height="24" rx="6" fill="#22334a" />
      <circle cx="16" cy="20" r="3" fill="#fff" />
      <rect x="20" y="20" width="16" height="10" rx="3" fill="#fff" />
    </svg>
    <h1
      style={{
        fontWeight: 700,
        letterSpacing: 2,
        color: "#22334a",
        fontSize: "2rem",
        margin: 0,
      }}
    >
      CATMASH
    </h1>
  </header>
);

export default Header;
