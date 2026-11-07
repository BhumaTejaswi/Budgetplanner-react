
import React, { useState } from "react";

function Welcome({ userName }) {
  return <span>{userName}</span>;
}

export default function App() {
  const [userName, setUserName] = useState("User");

  return (
    <main className="legacy-shell" aria-label="Budget Planner application">

      <div style={{ display: "none" }}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Welcome userName={userName} />
      </div>

      <iframe
        className="legacy-app"
        src="/legacy/index.html"
        title="Budget Planner"
        allow="clipboard-read; clipboard-write"
      />

    </main>
  );
}
