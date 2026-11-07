import React from "react";

export default function App() {
  return (
    <main className="legacy-shell" aria-label="Budget Planner application">
      <iframe
        className="legacy-app"
        src="/legacy/index.html"
        title="Budget Planner"
        allow="clipboard-read; clipboard-write"
      />
    </main>
  );
}