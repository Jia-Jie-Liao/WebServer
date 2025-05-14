const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'page')

app.get('/api/apis', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const search = (req.query.search || '').toLowerCase();

  try {
    const response = await fetch('https://www.freepublicapis.com/api/apis?limit=100&sort=best');
    const data = await response.json();

    // 過濾資料
    const filtered = data.filter(api => {
      return Object.entries(api).some(([key, value]) => {
        return typeof value === 'string' && value.toLowerCase().includes(search);
      });
    });

    // 限制筆數
    res.json(filtered.slice(0, limit))
  } catch (error) {
    console.error('Error fetching APIs:', error.message);
    res.status(500).json({ error: 'Failed to fetch public APIs' });
  }
});

app.listen(5000)