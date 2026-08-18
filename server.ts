import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Enable CORS for local dev
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact transmission route
app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  try {
    const response = await fetch('https://formsubmit.co/ajax/zaidsaifi150105@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        projectType: projectType || 'General Inquiry',
        message,
        _subject: `New Portfolio Inquiry from ${name} (${projectType || 'General'})`,
        _template: 'table',
        _captcha: 'false'
      })
    });

    const data = await response.json();
    return res.json({ success: true, data });
  } catch (error: any) {
    console.error('Email forwarding error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Failed to dispatch email' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Email Backend server listening on http://localhost:${PORT}`);
});
