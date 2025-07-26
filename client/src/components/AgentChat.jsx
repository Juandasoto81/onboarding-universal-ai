
import React, { useState } from 'react';
import './AgentChat.css';

const AgentChat = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hola, soy tu asistente virtual. ¿En qué idioma prefieres continuar?' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState('language'); // Paso actual
  const [userData, setUserData] = useState({});

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages([...messages, { from: 'user', text: trimmed }]);
    setInput('');

    setTimeout(() => {
      handleStep(trimmed);
    }, 500);
  };

  const handleStep = (value) => {
    switch (step) {
      case 'language':
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: '✅ Perfecto. Empecemos con tu nombre completo.' }
        ]);
        setStep('name');
        break;

      case 'name':
        setUserData((prev) => ({ ...prev, name: value }));
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: `Gracias, ${value}. ¿Cuál es tu correo electrónico?` }
        ]);
        setStep('email');
        break;

      case 'email':
        setUserData((prev) => ({ ...prev, email: value }));
        // Aquí simulamos envío OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('mockOTP', otp); // Para simular
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: `📨 Te envié un código OTP a ${value} (simulado: ${otp}). Escríbelo aquí para continuar.` }
        ]);
        setStep('otp');
        break;

      case 'otp':
        const correctOTP = localStorage.getItem('mockOTP');
        if (value === correctOTP) {
          setMessages((prev) => [
            ...prev,
            { from: 'bot', text: '✅ Verificación completada. ¡Bienvenido!' }
          ]);
          setStep('done');
        } else {
          setMessages((prev) => [
            ...prev,
            { from: 'bot', text: '❌ Código incorrecto. Intenta nuevamente.' }
          ]);
        }
        break;

      default:
        break;
    }
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === 'bot' ? 'message agent-message' : 'message user-message'}
          >
            {msg.text}
          </div>
        ))}
      </div>
      {step !== 'done' && (
        <form onSubmit={handleUserInput} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí..."
            className="chat-input"
          />
          <button type="submit" className="chat-button">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default AgentChat;
