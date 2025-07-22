const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Leer URL desde variable de entorno
const USERS_API_URL = 'https://friendly-charm-production.up.railway.app';

const products = [
  { id: 1, name: 'Laptop', userId: 1 },
  { id: 2, name: 'Phone', userId: 2 }
];

app.get('/products', async (req, res) => {
  try {
    const usersRes = await axios.get(`${USERS_API_URL}/users`);
    const userMap = Object.fromEntries(usersRes.data.map(user => [user.id, user.name]));

    const enriched = products.map(p => ({
      ...p,
      owner: userMap[p.userId] || 'Unknown'
    }));

    res.json(enriched);
  } catch (err) {
    console.error('Error calling users service:', err.message);
    res.status(500).send('Error connecting to users service');
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
});
