const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', userId: 1 },
  { id: 2, name: 'Phone', userId: 2 }
];

app.get('/products', async (req, res) => {
  try {
    const usersRes = await axios.get('http://users-service:3001/users');
    const userMap = Object.fromEntries(usersRes.data.map(user => [user.id, user.name]));

    const enhanced = products.map(p => ({
      ...p,
      owner: userMap[p.userId] || 'Unknown'
    }));

    res.json(enhanced);
  } catch (err) {
    res.status(500).send('Error connecting to users service');
  }
});

app.listen(3002, () => {
  console.log('Products service running on port 3002');
});
