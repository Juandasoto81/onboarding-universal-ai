import React, { useState } from "react";

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
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={msg.from === "agent" ? styles.agentMsg : styles.userMsg}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu respuesta..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}

const styles = {
  chatContainer: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "sans-serif",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },
  chatBox: {
    padding: "20px",
    height: "400px",
    overflowY: "auto",
    background: "#f9f9f9",
  },
  agentMsg: {
    background: "#e1f5fe",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
  },
  userMsg: {
    background: "#c8e6c9",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    textAlign: "right",
  },
  form: {
    display: "flex",
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
  },
  button: {
    padding: "10px 20px",
    background: "#1976d2",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default AgentChat;
