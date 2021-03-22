const { hashPassword } = require("../utils");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'danil', email: 'danil.rafiqi@gmail.com', password: hashPassword('12345678'), phone: '6285788598869'},
      ]);
    });
};
