import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const menu = [
  { label: "Dashboard", path: "/" },
  { label: "Magazzino", path: "/magazzino" },
  { label: "Gestione vendite", path: "/vendite" },
  { label: "Anagrafica clienti", path: "/clienti" },
  { label: "Acquisti", path: "/acquisti" },
  { label: "Ordini", path: "/ordini" },
];

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span style={{ fontFamily: 'monospace', fontSize: 18 }}>{time.toLocaleTimeString()}</span>
  );
}

export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#10281a" }}>
      {/* Sidebar */}
      <aside style={{
        width: 240,
        background: "linear-gradient(180deg, #1e5631 0%, #14532d 100%)",
        color: "#e6ffe6",
        display: "flex",
        flexDirection: "column",
        padding: "32px 0 0 0",
        boxShadow: "2px 0 12px #0002"
      }}>
        <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 40, textAlign: "center", letterSpacing: 2 }}>
          🌿 DIMAFLOR
        </div>
        {menu.map((item, i) => (
          <Link
            key={item.label}
            to={item.path}
            style={{
              display: "block",
              padding: "16px 32px",
              color: "inherit",
              textDecoration: "none",
              fontWeight: i === 0 ? 700 : 500,
              background: i === 0 ? "#14532d" : "none",
              borderLeft: i === 0 ? "4px solid #4ade80" : "4px solid transparent",
              transition: "background 0.2s, border 0.2s"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#166534")}
            onMouseOut={e => (e.currentTarget.style.background = i === 0 ? "#14532d" : "none")}
          >
            {item.label}
          </Link>
        ))}
      </aside>
      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header style={{
          height: 64,
          background: "#14532d",
          color: "#e6ffe6",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 32px",
          boxShadow: "0 2px 8px #0002"
        }}>
          <Clock />
        </header>
        {/* Dashboard content */}
        <main style={{ flex: 1, padding: 40 }}>
          <h1 style={{ color: "#4ade80", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Dashboard Magazzino Fiori</h1>
          <div style={{ color: "#e6ffe6" }}>
            Benvenuto nel gestionale! Qui troverai una panoramica delle attività principali.
          </div>
        </main>
      </div>
    </div>
  );
}