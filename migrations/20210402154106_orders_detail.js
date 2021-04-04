exports.up = function (knex) {
  return knex.schema.createTable("orders_detail", function (table) {
    table.increments("id");
    table.integer("order_id").notNullable();
    table.foreign("order_id").references("orders.id");
    table.integer("cart_id").notNullable();
    table.foreign("cart_id").references("carts.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders_detail");
};
