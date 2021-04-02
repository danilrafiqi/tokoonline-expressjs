
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'javascript'},
        {id: 2, name: 'golang'},
        {id: 3, name: 'python'},
        {id: 4, name: 'php'},
        {id: 5, name: 'c#'},
      ]);
    });
};
