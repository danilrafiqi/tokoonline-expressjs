
exports.up = function(knex) {
    return knex.schema.createTable("orders_detail", function(table){
        table.increments('id');
        table.integer('order_id').notNullable();
        table.foreign('order_id').references('orders_header.id')
        table.integer('address_id').notNullable();
        table.foreign('address_id').references('adresses.id')
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id')
        table.integer('coupon_id').nullable();
        table.foreign('coupon_id').references('coupons.id')
        table.integer('cart_id').notNullable();
        table.foreign('cart_id').references('carts.id')
        table.integer('quantity').notNullable();
    })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable("orders_detail")
};
