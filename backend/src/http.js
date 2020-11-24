const express = require('express');
const { getOpenRoles } = require('./airtable');


// Web server config
const port = 3000;
const app = express();


app.get('/api/getOpen', async (req, res) => {
  res.json(await getOpenRoles());
});

//handles 404s
app.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


app.listen(port, ()=>{
  console.log(`server is listening on port ${port}`);
});
