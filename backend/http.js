const express = require('express');
const { getOpenRoles } = require('./airtable');

const app = express();

app.get('/api/getOpen', async (req, res) => {
  res.json(await getOpenRoles());
});

app.listen(3000);
