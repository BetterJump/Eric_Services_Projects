const knex = require('knex')({
  client: 'pg',
  version: '7.7.1',
  connection: {
    host : '127.0.0.1',
    user : 'student',
    password : 'student',
    database : 'project_desc'
  }
});