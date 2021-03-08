
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coupons').del()
    .then(function () {
      // Inserts seed entries
      return knex('coupons').insert([
        {id: 1, code: 'AKHIRTAHUN', description:"lorem"},
        {id: 2, code: 'AKHIRBULAN', description:"lorem"},
        {id: 3, code: 'RAMADHAN', description:"lorem"}
      ]);
    });
};
