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
      connection: ':memory:',
      migrations: {
        directory: './config/migrations'
      },
      seeds: {
        directory: './config/seeds'
      },
      useNullAsDefault: true
    }
  };
  