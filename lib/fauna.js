const fauna = require('faunadb');
const client = new fauna.Client({ 
    secret: process.env.FAUNA_SECRET,
    domain: 'db.eu.fauna.com',
    scheme: 'https'
});
export default {
    query: fauna.query,
    client
};
    