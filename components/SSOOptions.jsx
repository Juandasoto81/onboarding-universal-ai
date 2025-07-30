import { Button, Stack } from '@mui/material';

export default function SSOOptions({ onContinue }) {
  return (
    <Stack spacing={2}>
      <Button variant="outlined" onClick={() => onContinue('sso-google')}>
        Continuar con Google
      </Button>
      <Button variant="outlined" onClick={() => onContinue('sso-github')}>
        Continuar con GitHub
      </Button>
      <Button variant="outlined" onClick={() => onContinue('email')}>
        No tengo cuenta SSO
      </Button>
    </Stack>
  );
}
