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
      addMessage("agent", "Redirigiendo a Google / GitHub...");
      setStep("sso");

      // Simulación de fallo o no uso del SSO
      setTimeout(() => {
        addMessage("agent", "Parece que no se completó el inicio por SSO.");
        addMessage("agent", "Vamos a intentarlo por correo.");
        setStep("email");
      }, 2000);
    } else {
      addMessage("agent", "Por favor ingresa tu correo electrónico:");
      setStep("email");
    }
  };

  const handleEmailSubmit = () => {
    addMessage("user", email);
    addMessage(
      "agent",
      `Te hemos enviado un código a ${email}. Ingrésalo para continuar.`,
    );
    setStep("otpEmail");
  };

  const handleOtpEmailSubmit = () => {
    addMessage("user", otpEmail);
    addMessage("agent", "✅ Correo verificado. Ahora, ingresa tu número celular:");
    setStep("phone");
  };

  const handlePhoneSubmit = () => {
    addMessage("user", phone);
    addMessage("agent", `📲 Te hemos enviado un código SMS a ${phone}.`);
    setStep("otpPhone");
  };

  const handleOtpPhoneSubmit = () => {
    addMessage("user", otpPhone);
    addMessage("agent", "🎉 Verificación completada con éxito. Bienvenido al sistema.");
    setStep("completado");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Agente AI - Onboarding</h2>

      <div
        style={{
          background: "#ffffff",
          color: "#333",
          padding: 10,
          borderRadius: 10,
          height: 300,
          overflowY: "auto",
          border: "1px solid #ccc",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.from === "agent" ? "left" : "right",
              margin: "8px 0",
            }}
          >
            <strong>{m.from === "agent" ? "🤖 Sofi:" : "🙋‍♂️ Tú:"}</strong>{" "}
            {m.text}
          </div>
        ))}
      </div>

      {/* Opciones iniciales */}
      {step === "inicio" && (
        <div style={{ marginTop: 15 }}>
          <button onClick={() => handleOption("SSO")}>
            Ingresar con Google / GitHub
          </button>
          <br />
          <button onClick={() => handleOption("email")} style={{ marginTop: 10 }}>
            Usar correo electrónico
          </button>
        </div>
      )}

      {/* Paso: Correo */}
      {step === "email" && (
        <div style={{ marginTop: 15 }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />
          <button onClick={handleEmailSubmit} style={{ marginLeft: 10 }}>
            Enviar código
          </button>
        </div>
      )}

      {/* Paso: OTP Correo */}
      {step === "otpEmail" && (
        <div style={{ marginTop: 15 }}>
          <input
            value={otpEmail}
            onChange={(e) => setOtpEmail(e.target.value)}
            placeholder="Código del correo"
          />
          <button onClick={handleOtpEmailSubmit} style={{ marginLeft: 10 }}>
            Confirmar código
          </button>
        </div>
      )}

      {/* Paso: Celular */}
      {step === "phone" && (
        <div style={{ marginTop: 15 }}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Número celular"
          />
          <button onClick={handlePhoneSubmit} style={{ marginLeft: 10 }}>
            Enviar código
          </button>
        </div>
      )}

      {/* Paso: OTP Celular */}
      {step === "otpPhone" && (
        <div style={{ marginTop: 15 }}>
          <input
            value={otpPhone}
            onChange={(e) => setOtpPhone(e.target.value)}
            placeholder="Código SMS"
          />
          <button onClick={handleOtpPhoneSubmit} style={{ marginLeft: 10 }}>
            Confirmar código
          </button>
        </div>
      )}
    </div>
  );
};

export default AgentChat;
