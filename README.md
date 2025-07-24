
# 🧠 Agente AI-First de Onboarding Universal

Este proyecto implementa un flujo de onboarding conversacional inteligente, multilingüe y modular, basado en Next.js, TailwindCSS e integraciones de verificación como OTP por celular y correo.

## 🚀 Características

- ✅ Flujo AI-first (modo conversacional)
- 🌐 Multiidioma (Español 🇪🇸 e Inglés 🇺🇸)
- 🔐 Autenticación con Google (NextAuth)
- 📲 Verificación con OTP por celular (Truora-ready)
- 📧 Verificación de correo por OTP (simulado)
- ⚙️ Preparado para escalar con APIs de verificación y generación de credenciales

## 🗂 Estructura del proyecto

```
onboarding-universal-ai/
├── pages/
│   └── api/
│       └── verify-phone.js
├── locales/
│   ├── en.json
│   └── es.json
├── tailwind.config.js
└── package.json
```

## 🔧 Instalación local

```bash
git clone https://github.com/tu_usuario/onboarding-universal-ai.git
cd onboarding-universal-ai
npm install
npm run dev
```

## ☁️ Despliegue

### Opción 1: Replit

1. Ve a https://replit.com
2. Crea nuevo proyecto con plantilla Node.js
3. Sube los archivos manualmente o conecta GitHub
4. Ejecuta: `npm install` y luego `npm run dev`

### Opción 2: Vercel

1. Ve a https://vercel.com/import
2. Conecta tu cuenta GitHub y selecciona el repo
3. Vercel detectará automáticamente que es un proyecto Next.js
4. ¡Tu agente estará en línea!

## 📄 Licencia

MIT — Puedes usarlo, adaptarlo y escalarlo libremente.
