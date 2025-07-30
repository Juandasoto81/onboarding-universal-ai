import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import SSOOptions from './SSOOptions';
import EmailOtpForm from './EmailOtpForm';
import PhoneOtpForm from './PhoneOtpForm';

export default function AuthStep({ onComplete }) {
  const [step, setStep] = useState('sso'); // 'sso' | 'email' | 'phone'

  const handleContinue = (method) => {
    if (method.startsWith('sso')) {
      console.log(`Autenticando con: ${method}`);
      // Aquí haces el login SSO y luego vas a verificación de teléfono
      setStep('phone');
    } else if (method === 'email') {
      setStep('email');
    }
  };

  const handleEmailVerified = () => {
    setStep('phone');
  };

  const handlePhoneVerified = () => {
    onComplete(); // Proceso completo
  };

  return (
    <Box sx={{ mt: 4 }}>
      {step === 'sso' && (
        <>
          <Typography variant="h6" gutterBottom>
            Inicia sesión con tu cuenta o correo
          </Typography>
          <SSOOptions onContinue={handleContinue} />
        </>
      )}
      {step === 'email' && (
        <>
          <Typography variant="h6" gutterBottom>
            Verifica tu correo con un OTP
          </Typography>
          <EmailOtpForm onVerify={handleEmailVerified} />
        </>
      )}
      {step === 'phone' && (
        <>
          <Typography variant="h6" gutterBottom>
            Verifica tu número de teléfono
          </Typography>
          <PhoneOtpForm onComplete={handlePhoneVerified} />
        </>
      )}
    </Box>
  );
}
