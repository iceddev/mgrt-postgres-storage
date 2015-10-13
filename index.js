'use strict';

var query = require('pg-query');

query.connectionParameters = process.env.DATABASE_URL;

var readfile = require('fs').readFileSync;

var get = readfile(__dirname + '/sql/get.sql', 'utf8');
var del = readfile(__dirname + '/sql/delete.sql', 'utf8');
var update = readfile(__dirname + '/sql/update.sql', 'utf8');

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
