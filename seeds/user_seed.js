
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'danil', email: 'danil.rafiqi@gmail.com', password: 'password', phone: '6285788598869'},
      ]);
    });
};
