// pages/index.js
import React from "react";
import AgentChat from "../components/AgentChat.jsx";

export default function Home() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <AgentChat />
    </div>
  );
}
