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

const getEvents = async () => {
	try {
		return base('Calendar')
			.select({
				view: 'Grid view',
				filterByFormula: 'IS_AFTER({Date}, TODAY())',
				sort: [{ field: 'Date', direction: 'asc' }],
			})
			.all();
	} catch (error) {
		console.log(error);
	}
};

const getCommunityGroups = async () => {
	try {
		return base('Community Groups')
			.select({
				view: 'Grid view',
				filterByFormula: "{Is it approved?} = '1'"
			})
			.all();
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getOpenRoles, getEvents, getCommunityGroups };
