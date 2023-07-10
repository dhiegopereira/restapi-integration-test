const assert = require('assert');
const request = require('supertest');
const express = require('express');
const knex = require('knex');
const config = require('../../config/knexfile');

const app = express();
const db = knex(config.test);
const routes = require('./');

app.use(express.json());
app.use(routes);

describe('Todo Routes', () => {
  let server;

  before((done) => {
    server = app.listen(done);
  });

  after((done) => {
    server.close(done);
  });

  beforeEach(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.deepStrictEqual(res.body,  
        [
          {
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 1,
            title: 'Fazer compras',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 2,
            title: 'Estudar JavaScript',
            updated_at: '2023-07-10T05:02:45.695Z'
          },
          {
            completed: false,
            created_at: '2023-07-10T05:02:45.695Z',
            description: '',
            id: 3,
            title: 'Ir à academia',
            updated_at: '2023-07-10T05:02:45.695Z'
          }
        ]);

        done();
      });
  });
});
