import React, { useState } from "react";

const AgentChat = () => {
  const [step, setStep] = useState("inicio");
  const [email, setEmail] = useState("");
  const [otpEmail, setOtpEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpPhone, setOtpPhone] = useState("");
  const [messages, setMessages] = useState([
    { from: "agent", text: "Hola 👋, ¿cómo deseas comenzar tu registro?" },
  ]);

  const addMessage = (from, text) =>
    setMessages((prev) => [...prev, { from, text }]);

  const handleOption = (option) => {
    if (option === "SSO") {
      const correoSimulado = "usuario@dominio.com";
      addMessage("agent", "✅ Inicio de sesión con Google exitoso.");
      addMessage("agent", `Correo detectado: ${correoSimulado}`);
      setEmail(correoSimulado);
      setStep("phone"); // pasa directo a celular
    } else {
      addMessage("agent", "Por favor ingresa tu correo electrónico:");
      setStep("email");
    }
  };

  const handleEmailSubmit = () => {
    addMessage("user", email);
    addMessage("agent", `Te enviamos un código a ${email}.`);
    setStep("otpEmail");
  };

  const handleOtpEmailSubmit = () => {
    addMessage("user", otpEmail);
    addMessage("agent", "✅ Correo verificado. Ingresa tu número celular:");
    setStep("phone");
  };

  const handlePhoneSubmit = () => {
    addMessage("user", phone);
    addMessage("agent", `📲 Enviamos un SMS a ${phone}. Ingrésalo para continuar.`);
    setStep("otpPhone");
  };

  const handleOtpPhoneSubmit = () => {
    addMessage("user", otpPhone);
    addMessage("agent", "🎉 Registro completado con éxito. ¡Bienvenido!");
    setStep("completado");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">🤖 Sofi - Onboarding</h2>

      <div className="bg-gray-100 h-64 overflow-y-auto p-3 rounded space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded ${
              m.from === "agent"
                ? "bg-white text-left shadow"
                : "bg-blue-100 text-right"
            }`}
          >
            <strong>{m.from === "agent" ? "Sofi:" : "Tú:"}</strong> {m.text}
          </div>
        ))}
      </div>

      {/* Opciones iniciales */}
      {step === "inicio" && (
        <div className="mt-4 space-y-2">
          <button
            onClick={() => handleOption("SSO")}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Ingresar con Google/GitHub
          </button>
          <button
            onClick={() => handleOption("email")}
            className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
          >
            Usar correo electrónico
          </button>
        </div>
      )}

      {/* Correo */}
      {step === "email" && (
        <div className="mt-4 flex space-x-2">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handleEmailSubmit}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Enviar
          </button>
        </div>
      )}

      {/* OTP email */}
      {step === "otpEmail" && (
        <div className="mt-4 flex space-x-2">
          <input
            placeholder="Código del correo"
            value={otpEmail}
            onChange={(e) => setOtpEmail(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handleOtpEmailSubmit}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Confirmar
          </button>
        </div>
      )}

      {/* Celular */}
      {step === "phone" && (
        <div className="mt-4 flex space-x-2">
          <input
            placeholder="Número celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handlePhoneSubmit}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Enviar
          </button>
        </div>
      )}

      {/* OTP celular */}
      {step === "otpPhone" && (
        <div className="mt-4 flex space-x-2">
          <input
            placeholder="Código SMS"
            value={otpPhone}
            onChange={(e) => setOtpPhone(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
          />
          <button
            onClick={handleOtpPhoneSubmit}
            className="bg-green-600 text-white px-4 rounded"
          >
            Verificar
          </button>
        </div>
      )}
    </div>
  );
};

export default AgentChat;
