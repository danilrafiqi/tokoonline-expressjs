
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_detail').insert([
        {id: 1, order_id: 1, address_id:1, user_id:1, coupon_id:1, cart_id:1, quantity:1},
        {id: 2, order_id: 1, address_id:1, user_id:1, coupon_id:1, cart_id:1, quantity:2},
        {id: 3, order_id: 1, address_id:1, user_id:1, coupon_id:1, cart_id:1, quantity:3},
      ]);
    });
};
