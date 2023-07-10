exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todo').del()
      .then(function () {
        // Inserts seed entries
        return knex('todo').insert([
          { title: 'Fazer compras' },
          { title: 'Estudar JavaScript' },
          { title: 'Ir à academia' }
        ]);
      });
  };
  