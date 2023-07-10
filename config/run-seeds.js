const knex = require('knex');
const config = require('./knexfile');

async function runSeeds() {
  // Configurar a conexão com o banco de dados
  const db = knex(config.development);

  try {
    // Executar as seeds
    await db.seed.run();
    console.log('Seeds executadas com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao executar as seeds:', error);
  } finally {
    // Fechar a conexão com o banco de dados
    await db.destroy();
  }
}

runSeeds();
