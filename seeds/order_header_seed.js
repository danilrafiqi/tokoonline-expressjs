
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders_header').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_header').insert([
        {id: 1, total: 1000},
        {id: 2, total: 1000},
        {id: 3, total: 1000}
      ]);
    });
};
