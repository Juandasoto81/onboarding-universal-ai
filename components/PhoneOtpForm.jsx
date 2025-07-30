import { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';

export default function PhoneOtpForm({ onComplete }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // Aquí deberías integrar tu servicio de envío de OTP
    console.log(`Enviando OTP a: ${phone}`);
    setSent(true);
  };

  const handleVerify = () => {
    // Aquí deberías validar el OTP
    console.log(`Verificando OTP de teléfono: ${otp}`);
    onComplete();
  };

  return (
    <Stack spacing={2}>
      {!sent ? (
        <>
          <TextField
            label="Número de Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
