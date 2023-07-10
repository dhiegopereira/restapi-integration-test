exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todo').del()
      .then(function () {
        // Inserts seed entries
        return knex('todo').insert([
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
      });
  };
  