const express = require('express');
const cors = require('cors');
const { getOpenRoles, getEvents } = require('./airtable');

// Web server config
const port = 3000;
const app = express();

app.get(
	'/api/getOpen',
	cors({ origin: 'http://localhost:8000' }),
	async (req, res) => {
		const data = await getOpenRoles();
		const rawJson = data.map((item) => item._rawJson);
		res.json(rawJson);
	}
);

app.get(
	'/api/getEvents',
	cors({ origin: 'http://localhost:8000' }),
	async (req, res) => {
		try{
			const data = await getEvents();
		const rawJson = data.map((item) => item._rawJson);
		res.json(rawJson);
		}
		catch(err){
			console.log(console.error(err))
			res.send(err)
		}
	}
);

// handles 404s
app.use(function (req, res, next) {
	const err = new Error('Not found.');
	err.status = 404;
	next(err);
});

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
