import React, { useState } from "react";

const AgentChat = () => {
  const [step, setStep] = useState("inicio");
  const [email, setEmail] = useState("");
  const [otpEmail, setOtpEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpPhone, setOtpPhone] = useState("");
  const [messages, setMessages] = useState([
    { from: "agent", text: "Hola 👋, ¿cómo deseas continuar?" },
  ]);

  const addMessage = (from, text) =>
    setMessages((prev) => [...prev, { from, text }]);

  const handleOption = (option) => {
    if (option === "SSO") {
      addMessage(
        "agent",
        "Por favor haz clic en el botón de tu proveedor preferido 👇",
      );
      setStep("sso");
    } else {
      addMessage("agent", "Perfecto, por favor ingresa tu correo electrónico:");
      setStep("email");
    }
  };

  const handleEmailSubmit = () => {
    addMessage("user", email);
    addMessage(
      "agent",
      `Te he enviado un código a ${email}. Ingrésalo para continuar.`,
    );
    setStep("otpEmail");
  };

  const handleOtpEmailSubmit = () => {
    addMessage("user", otpEmail);
    addMessage("agent", "¡Validado! Ahora ingresa tu número de celular.");
    setStep("phone");
  };

  const handlePhoneSubmit = () => {
    addMessage("user", phone);
    addMessage("agent", `Te enviamos un código por SMS a ${phone}.`);
    setStep("otpPhone");
  };

  const handleOtpPhoneSubmit = () => {
    addMessage("user", otpPhone);
    addMessage("agent", "✅ Verificación completada con éxito.");
    setStep("completado");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Agente AI - Onboarding</h2>
      <div
        style={{
          background: "#f4f4f4",
          padding: 10,
          borderRadius: 10,
          height: 300,
          overflowY: "auto",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.from === "agent" ? "left" : "right",
              margin: 5,
            }}
          >
            <strong>{m.from === "agent" ? "🤖 Sofi:" : "🙋‍♂️ Tú:"}</strong>{" "}
            {m.text}
          </div>
        ))}
      </div>

      {step === "inicio" && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => handleOption("SSO")}>
            Ingresar con Google / GitHub
          </button>
          <button onClick={() => handleOption("email")}>
            Ingresar con correo electrónico
          </button>
        </div>
      )}

      {step === "email" && (
        <div style={{ marginTop: 10 }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <button onClick={handleEmailSubmit}>Enviar OTP</button>
        </div>
      )}

      {step === "otpEmail" && (
        <div style={{ marginTop: 10 }}>
          <input
            value={otpEmail}
            onChange={(e) => setOtpEmail(e.target.value)}
            placeholder="Código OTP"
          />
          <button onClick={handleOtpEmailSubmit}>Validar</button>
        </div>
      )}

      {step === "phone" && (
        <div style={{ marginTop: 10 }}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Número de celular"
          />
          <button onClick={handlePhoneSubmit}>Enviar OTP</button>
        </div>
      )}

      {step === "otpPhone" && (
        <div style={{ marginTop: 10 }}>
          <input
            value={otpPhone}
            onChange={(e) => setOtpPhone(e.target.value)}
            placeholder="Código SMS"
          />
          <button onClick={handleOtpPhoneSubmit}>Validar</button>
        </div>
      )}
    </div>
  );
};

export default AgentChat;
