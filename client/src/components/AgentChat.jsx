import React, { useState } from "react";
import "./AgentChat.css";

function AgentChat() {
  const [messages, setMessages] = useState([
    {
      from: "agent",
      text: "👋 Hola, soy tu asistente virtual. ¿En qué idioma prefieres continuar?",
      options: ["Español", "English"],
    },
  ]);
  const [input, setInput] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Agrega el mensaje del usuario
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    // Limpiar campo
    setInput("");

    // Aquí irá la lógica del agente más adelante
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === "agent" ? "message agent-message" : "message user-message"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu respuesta..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default AgentChat;