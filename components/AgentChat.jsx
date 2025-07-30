// components/AgentChat.jsx
import { Box, Typography, Button } from '@mui/material';

export default function AgentChat() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Hola 👋 Soy tu asistente de onboarding AI
      </Typography>
      <Button variant="contained" color="primary">
        Comenzar
      </Button>
    </Box>
  );
}
