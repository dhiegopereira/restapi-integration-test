module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'postgres',
        database: 'todolist'
      },
      migrations: {
        directory: './config/migrations'
      },
      seeds: {
        directory: './config/seeds'
      }
    },
    test: {
      client: 'sqlite3',
      connection: './config/database.sqlite',
      migrations: {
        directory: './config/migrations'
      },
      seeds: {
        directory: './config/seeds'
      },
      useNullAsDefault: true
    }
  };
  