
exports.up = function(knex) {
    return knex.schema.createTable("orders_header", function(table){
        table.increments('id');
        table.integer('total').notNullable();
        table.integer('address_id').notNullable();
        table.foreign('address_id').references('adresses.id')
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id')
        table.integer('coupon_id').nullable();
        table.foreign('coupon_id').references('coupons.id')
    })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable("orders_header")
};
