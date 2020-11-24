const Airtable = require('airtable');

require('dotenv').config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);

const getOpenRoles = async () => {
	try {
		return base('Roles')
			.select({
				view: 'Grid view',
				filterByFormula: "AND({Status} = 'open',{Is it approved?} = '1')",
			})
			.all();
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getOpenRoles };
