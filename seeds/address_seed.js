
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {id: 1, address: 'alamat 1', user_id:1},
        {id: 2, address: 'alamat 2', user_id:1},
        {id: 3, address: 'alamat 3', user_id:1}
      ]);
    });
};
