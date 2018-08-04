// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST_DEV_DB,
      user: process.env.USER_DEV_DB,
      password: process.env.PASSWORD_DEV,
      database: process.env.DATABASE_DEV_DB,
      typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return (field.string() === '1')
        }
        return next()
      },

    },
    migrations: {
      directory: './src/db/migarations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
