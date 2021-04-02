const { hashPassword } = require("../utils");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1, 
          name: 'danil.rafiqi@gmail.com', 
          phone: '085788598869',
          profilePicture: 'default.jpg',
          user_id: 1,
        },
      ]);
    });
};
