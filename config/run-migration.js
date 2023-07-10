const knex = require('knex');
const config = require('./knexfile');

async function runMigration() {
  // Configurar a conexão com o banco de dados
  const db = knex(config.development);

  try {
    // Executar a migração
    await db.migrate.rollback();
    await db.migrate.latest();
    console.log('Migration executada com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar a migração:', error);
  } finally {
    // Fechar a conexão com o banco de dados
    await db.destroy();
  }
}

runMigration();
