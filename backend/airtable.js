const Airtable = require('airtable');

require('dotenv').config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const getOpenRoles = () =>
  new Promise((resolve, reject) => {
    base
      .table(process.env.AIRTABLE_TABLE_NAME)
      .select({
        view: 'Grid view',
        filterByFormula: "AND({Status} = 'open',{Is it approved?} = '1')",
      })
      .eachPage(
        (records, fetchNextPage) =>
          resolve(records.map(record => record.fields)),
        err => {
          if (err) reject(err);
        }
      );
  });

module.exports = { getOpenRoles };
