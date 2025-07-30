import { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';

export default function EmailOtpForm({ onVerify }) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // Aquí deberías integrar tu servicio de envío de OTP
    console.log(`Enviando OTP a: ${email}`);
    setSent(true);
  };

  const handleVerify = () => {
    // Aquí deberías validar el OTP
    console.log(`Verificando OTP: ${otp}`);
    onVerify('email');
  };

  return (
    <Stack spacing={2}>
      {!sent ? (
        <>
          <TextField
            label="Correo Electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleSend}>
            Enviar OTP
          </Button>
        </>
      ) : (
        <>
          <TextField
            label="Código OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleVerify}>
            Verificar OTP
          </Button>
        </>
      )}
    </Stack>
  );
}
