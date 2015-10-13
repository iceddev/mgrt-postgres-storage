'use strict';

var query = require('pg-query');

query.connectionParameters = process.env.DATABASE_URL;

var get = require('sql-load')('sql/get');
var del = require('sql-load')('sql/delete');
var update = require('sql-load')('sql/update');

module.exports = {
  get: function(callback){
    query(get)
      .spread(function(res){
        return res[0].migration;
      })
      .tap(callback)
      .done();
  },
  set: function(data, callback){
    query(del, [data])
      .then(function(){
        return query(update, [data]);
      })
      .tap(callback)
      .done();
  }
};
