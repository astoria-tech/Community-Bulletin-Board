const config = {
	// Airtable
	AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
	AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
	AIRTABLE_ROLES_TABLE_NAME: process.env.AIRTABLE_ROLES_TABLE_NAME || 'Roles',
};

module.exports = config;
