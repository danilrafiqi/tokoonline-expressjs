
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'ini name', description:"ini desc", price:100000, image:"https://placeimg.com/480/480/tech"},
        {id: 2, name: 'ini name2', description:"ini desc", price:100000, image:"https://placeimg.com/480/480/tech"},
        {id: 3, name: 'ini name2', description:"ini desc", price:100000, image:"https://placeimg.com/480/480/tech"},
      ]);
    });
};
