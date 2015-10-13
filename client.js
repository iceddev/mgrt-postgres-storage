'use strict';

var query = require('pg-query');

query.connectionParameters = process.env.DATABASE_URL;

module.exports = query;
