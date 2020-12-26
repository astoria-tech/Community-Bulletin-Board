const express = require('express');
const cors = require('cors');
const { getOpenRoles } = require('./airtable');

// Web server config
const port = 3000;
const app = express();

app.get(
  '/api/getOpen',
  cors({ origin: 'http://localhost:8000' }),
  async (req, res) => {
    const data = await getOpenRoles();
    const rawJson = data.map(item => item._rawJson);
    res.json(rawJson);
  }
);

// handles 404s
app.use(function(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
