exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("orders_detail")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("orders_detail").insert([
        { id: 1, order_id: 1, cart_id: 1, status: "ordered" },
        { id: 2, order_id: 1, cart_id: 2, status: "ordered" },
        { id: 3, order_id: 1, cart_id: 3, status: "ordered" },
      ]);
    });
};
