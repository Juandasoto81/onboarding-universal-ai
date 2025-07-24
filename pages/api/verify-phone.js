export default function handler(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body;
    res.status(200).json({ message: `OTP enviado a ${phone}` });
  } else {
    res.status(405).end();
  }
}