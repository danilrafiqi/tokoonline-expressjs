
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coupons').del()
    .then(function () {
      // Inserts seed entries
      return knex('coupons').insert([
        {id: 1, code: 'AKHIRTAHUN', description:"lorem", percentage:0, fixedDiscount:10000},
        {id: 2, code: 'AKHIRBULAN', description:"lorem", percentage:10, fixedDiscount:0},
        {id: 3, code: 'RAMADHAN', description:"lorem", percentage:0, fixedDiscount:10000}
      ]);
    });
};
