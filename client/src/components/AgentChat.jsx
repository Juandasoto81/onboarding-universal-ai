import React, { useState } from "react";
import "./AgentChat.css";

function AgentChat() {
  const [messages, setMessages] = useState([
    { from: "agent", text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");

      // Simular respuesta del agente
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { from: "agent", text: "Gracias por tu mensaje. ¿Hay algo más en lo que pueda ayudarte?" }
        ]);
      }, 1000);
    }
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