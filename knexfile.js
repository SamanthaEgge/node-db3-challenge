// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'webdb3',
      user:     process.env.username,
      password: process.env.password
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    //   },
    // },
  }, 
};
